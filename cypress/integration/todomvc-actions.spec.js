/// <reference types="cypress" />

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh');
    cy.get('.new-todo', { timeout: 6000 }).type('learn cypress{enter}');
  })

  //default timeout for cypress is 4 seconds. If specified timeout in the url is longer than that, add a timeout option to the cy.get function to override cypress defaults.
  it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'learn cypress');
  });

  it('should be able to click on a todo to mark it completed', () => {
    cy.get('.toggle').should('not.to.be.checked');
    cy.get('.toggle').click();
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  });

  it('should clear all completed todos on clicking clear completed button', () => {
    cy.get('.toggle').click();
    //cy.contains finds elements that contain certain text
    cy.contains(/clear/i).click();
    cy.get('.todo-list').should('not.have.descendants', 'li');
  });
});
