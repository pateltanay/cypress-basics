describe('first test spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('baseAppUrl'))
  })
})