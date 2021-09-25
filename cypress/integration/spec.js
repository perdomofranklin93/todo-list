import * as faker from 'faker'; 

// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe("E2E todo list app", () => {
  it("Create a todo", function () {
    cy.visit("http://localhost:3000/home").get('#create-input').type(faker.random.words());
    cy.get("#add-button").click();
  });

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
});
