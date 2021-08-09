it('Should see a error when a 401 status code is received', () => {
  cy.intercept({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random/50'
  },
  {
    statusCode: 400
  })
    cy.visit('http://localhost:3000/')
    cy.get('h2').should('contain', 'Error')
    cy.get('p').should('contain', 'Something went wrong. Please try again.')
})

it('Should see a error when a 404 status code is received', () => {
  cy.intercept({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random/50'
  },
  {
    statusCode: 401
  })
    cy.visit('http://localhost:3000/')
    cy.get('h2').should('contain', 'Error')
    cy.get('p').should('contain', 'Something went wrong. Please try again.')
  })

  it('Should see a error when an incorrect URL path is input', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/image/random/50'
    },
    {
      statusCode: 404
    })
      cy.visit('http://localhost:3000/invalidpath')
      cy.get('h2').should('contain', 'Error')
      cy.get('p').should('contain', 'Something went wrong. Please try again.')
    })

  it('Should see a 500 error if the API cannot be loaded', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://dog.ceo/api/breeds/image/random/50'
    },
    {
      statusCode: 500
    })
      cy.visit('http://localhost:3000/')
      cy.get('h2').should('contain', 'Error')
      cy.get('p').should('contain', 'Something went wrong. Please try again.')
  })

