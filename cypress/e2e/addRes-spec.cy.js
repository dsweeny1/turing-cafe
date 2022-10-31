describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', { fixture: 'addRes.json'}).as('res')
    cy.visit('http://localhost:3000/')
  })
  it('Should be able to add a reservation', () => {
      cy.get('[placeholder="Name"]').type('Danielle').should('have.value', 'Danielle')
      cy.get('[placeholder="Date"]').type('2/8').should('have.value', '2/8')
      cy.get('[placeholder="Number of Guests"]').type('4').should('have.value', '4')
      cy.get('[placeholder="Time"]').type('2 pm').should('have.value', '2 pm')
      cy.get('button').click()
      cy.get(':nth-child(12) > .res-name').contains('Danielle')
      cy.get(':nth-child(12) > .res-date').contains('2/8')
      cy.get(':nth-child(12) > .res-time').contains('2 pm')
      cy.get(':nth-child(12) > .res-guests').contains('4')
    })
    // it('should show the new reservation card', () => {
    //   cy.get(':nth-child(11) > .res-name').contains('Danielle')
    //   cy.get(':nth-child(11) > .res-date').contains('2/8')
    // })
  })