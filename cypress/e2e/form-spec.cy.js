describe('empty spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('should check inputs', () => {
    cy.get('[placeholder="Name"]').type('Danielle').should('have.value', 'Danielle')
    cy.get('[placeholder="Date"]').type('2/8').should('have.value', '2/8')
    cy.get('[placeholder="Number of Guests"]').type('4').should('have.value', '4')
    cy.get('[placeholder="Time"]').type('2 pm').should('have.value', '2 pm')
  })
})