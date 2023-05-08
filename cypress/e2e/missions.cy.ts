/// <reference types="cypress"/>

describe('(Missoes) Testando se', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('existem 20 missoes na tela', () => {
    cy.get('[data-testid="missions"]').should('have.length', 20);
  });

  it('em cada card possui as informações corretas', () => {
    cy.get('[data-testid=mission-name]').should('exist');
    cy.get('[data-testid=mission-year]').should('exist');
    cy.get('[data-testid=mission-country]').should('exist');
    cy.get('[data-testid=mission-destination]').should('exist');
  
})})