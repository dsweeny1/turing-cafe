describe('User Flow', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('should show the user their reservations', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })
  it('should show the user a form', () => {
    cy.get('[placeholder="Name"]')
    cy.get('[placeholder="Date"]')
    cy.get('[placeholder="Number of Guests"]')
    cy.get('[placeholder="Time"]')
    cy.get('button')
  })
  it('should show the user their reservations', () => {
    cy.get(':nth-child(1) > .res-name')
    cy.get(':nth-child(1) > .res-date')
    cy.get(':nth-child(1) > .res-time')
    cy.get(':nth-child(1) > .res-guests')
  })
})