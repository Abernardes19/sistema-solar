/// <reference types="cypress"/>

describe("Testando se no cabeçalho", () => {
  it('tem o texto correto', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-testid="header"]').should('have.text', 'Sistema Solar');
  })
})