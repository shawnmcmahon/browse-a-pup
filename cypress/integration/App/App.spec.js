describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not load the game if there is a 404 error', () => {
    cy.intercept('GET', 'https://dog.ceo/api/breeds/image/random/50', {
      fixture: 'dogs.json',
      statusCode: 200
    })
    cy.get('article > img')
      .get('img').first()
      .should('be.visible')

  


    

  })





})