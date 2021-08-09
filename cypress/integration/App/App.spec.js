describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should contain a header' , () => {
    cy.get('header')
      .should('have.class', 'header-container')
      .should('be.visible')
      .find('button')
      .should(($button) => {
        expect($button).to.have.length(3)
      })
  })

  it('Should contain a button that lets the user view past dogs', () => {
    cy.get('[data-cy="past-dogs-button"]').click()
    cy.get('h2').should('contain', 'Past Pups')
    cy.get('[data-cy="past-dogs-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(2)
      })
  })

  it('Should contain a button that lets the user view home page', () => {
    cy.get('[data-cy="past-dogs-button"]').click()
    cy.get('[data-cy="home-button"]').click()
    cy.get('h2').should('contain', 'Browse A Pup')
    cy.get('[data-cy="adopt-container"]')
      .find('article')
      .should(($article) => {
        expect($article).to.have.length(2)
      })
  })

  it('Should contain a button that lets the user view loved dogs', () => {
    cy.get('[data-cy="loved-dogs-button"]').click()
    cy.get('h2').should('contain', 'Loved Pups')
    cy.get('p').should('contain', 'You haven\'t loved any pups! Love pups to see them here.')
    cy.get('[data-cy="loved-dogs-container]')
      .should(($article) => {
        expect($article).to.have.length(0)
    })
  })

})





