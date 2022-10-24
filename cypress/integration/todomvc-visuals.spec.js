/// <reference types="cypress" />

import { after, afterEach } from 'mocha';
import { addTodo, navigate, toggleTodo } from '../page-objects/todo-page';

describe('visual validation', () => {
  before(() => {
    navigate();
  });

  beforeEach(() =>
    cy.eyesOpen({
      appname: 'cypress-intro',
      batchName: 'cypress-intro',
      browser: [
        { name: 'chrome', width: 1024, height: 768 },
        { name: 'chrome', width: 800, height: 600 },
        { name: 'firefox', width: 1024, height: 768 },
        { deviceName: 'iPhone X' },
      ],
    })
  );

  afterEach(() => cy.eyesClose());

  it('should look correct with displayed todo list', () => {
    cy.eyesCheckWindow('empty todo list');

    addTodo('get up');
    addTodo('get out of bed');

    cy.eyesCheckWindow('two todos');

    toggleTodo(0);

    cy.eyesCheckWindow('mark as completed');
  });
});
