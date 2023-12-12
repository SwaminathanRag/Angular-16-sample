describe('My e2e Test for Angular Sample Second', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('This is counter value')
  });
})
