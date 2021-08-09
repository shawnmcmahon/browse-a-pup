describe('Adopt', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });


  it('Should see the home page upon load' , () => {
    cy.get('div').should('have.class', 'adopt-container').should('be.visible')
    cy.get('[data-cy="dog-box"]')
      .first()
      .should('have.class', 'dog-box')
      .should('be.visible')
      .find('p')
      .should(($p) => {
        expect($p).to.have.length(2)
      })
    cy.get('[data-cy="dog-box"]')
      .last()
      .should('have.class', 'dog-box')
      .should('be.visible')
      .find('p')
      .should(($p) => {
        expect($p).to.have.length(2)
      })

  })

  it('Should have viewed dogs appear in the past dogs view', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random/50', {
      fixture: 'dogs.json',
      statusCode: 200
    })
    cy.wait(1000)
    cy.get('[data-cy="keep-button-one"]').click()
    cy.get('[data-cy="keep-button-two"]').click()
    cy.get('[data-cy="keep-button-one"]').click()
    cy.get('[data-cy="past-dogs-button"]').click()
    cy.get('[data-cy="past-dogs-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(3)
      })
  })

  it('Should have all loved dogs appear in loved dogs view', () => {
    cy.wait(1000)
      .get('[data-cy="love-dog"]').first().click()
      .get('[data-cy="love-dog"]').last().click()
      .get('[data-cy="loved-dogs-button').click()
    cy.get('[data-cy="loved-dogs-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(2)
      })
  })

  it('Should have dog removed from loved page if user unloves dog', () => {
    cy.wait(1000)
      .get('[data-cy="love-dog"]').first().click()
      .get('[data-cy="loved-dogs-button"]').click()
    cy.get('[data-cy="loved-dogs-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(1)
      })
    cy.get('[data-cy="loved-dogs-button"]').click()
    cy.get('[data-cy="love-dog"]').first().click()
    cy.get('[data-cy="loved-dogs-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(0)
      })
      
  })



})