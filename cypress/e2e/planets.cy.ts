/// <reference types="cypress"/>

describe('(Sistema Solar) Testando se', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('existem 8 planetas na tela', () => {
    cy.get('[data-testid="planetCard"]').should('have.length', 8);
  });

  it('em cada card possui o nome do planeta e a imagem', () => {
    cy.get('[data-testid="planetCard"]').each((_$el, index) => {
      cy.get(`[data-testid="planetCard"]:eq(${index})`).children('p').should('exist');

      cy.get(`[data-testid="planetCard"]:eq(${index})`).children('img').should('exist');
  })
  
})})