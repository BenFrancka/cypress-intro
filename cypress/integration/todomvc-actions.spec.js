/// <reference types="cypress" />

import {
  navigate,
  addTodo,
  validateTodoText,
  toggleTodo,
  clearCompletedTodos,
  validateTodoCompletedState,
  validateToggleState,
  validateNumberofTodosShown,
} from '../page-objects/todo-page';

describe('todo actions', () => {
  beforeEach(() => {
    navigate();
    addTodo('learn cypress');
  });

  //default timeout for cypress is 4 seconds. If specified timeout in the url is longer than that, add a timeout option to the cy.get function to override cypress defaults.
  it('should add a new todo to the list', () => {
    validateTodoText(0, 'learn cypress');
    validateToggleState(0, false);
  });

  it('should be able to click on a todo to mark it completed', () => {
    toggleTodo(0);
    validateTodoCompletedState(0, true);
  });

  it('should clear all completed todos on clicking clear completed button', () => {
    toggleTodo(0);
    clearCompletedTodos();
    validateNumberofTodosShown(0);
  });
});
