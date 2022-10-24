/// <reference types="cypress" />

describe('filtering todos', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo').type('learn cypress{enter}');
    cy.get('.new-todo').type('upgrade brain{enter}');
    cy.get('.new-todo').type('update firewall{enter}');
    cy.get('.todo-list li:nth-child(2) .toggle').click();
  });

  it('should filter active todos', () => {
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('should filter completed', () => {
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('should filter all', () => {
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 3);
  });
});
