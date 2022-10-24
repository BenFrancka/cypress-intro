/// <reference types="cypress" />

export const navigate = () => {
  cy.visit('http://todomvc-app-for-testing.surge.sh');
};

export const addTodo = (todoText) => {
  cy.get('.new-todo', { timeout: 6000 }).type(todoText + '{enter}');
};

export const toggleTodo = (todoIndex) => {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click();
};

export const showCompletedTodos = () => {
  cy.contains('Completed').click();
};

export const showActiveTodos = () => {
  cy.contains('Active').click();
};

export const showAllTodos = () => {
  cy.contains('All').click();
};

export const clearCompletedTodos = () => {
  cy.contains('Clear completed').click();
};

export const validateNumberofTodosShown = (expectedNumberOfTodos) => {
  cy.get('.todo-list li').should('have.length', expectedNumberOfTodos);
};

export const validateToggleState = (todoIndex, shouldBeToggled) => {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);
  label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`);
};

export const validateTodoCompletedState = (todoIndex, shouldBeCompleted) => {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);

  label.should(
    `${shouldBeCompleted ? '' : 'not.'}have.css`,
    'text-decoration-line',
    'line-through'
  );
};

export const validateTodoText = (todoIndex, expectedText) => {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should(
    'have.text',
    expectedText
  );
};
