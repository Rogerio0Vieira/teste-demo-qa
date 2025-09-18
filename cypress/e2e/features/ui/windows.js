import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import BrowserWindowsPage from '../../pageobjects/BrowserWindowsPage';

const browserWindowsPage = new BrowserWindowsPage();

Given("que eu esteja na página de Browser Windows", () => {
  browserWindowsPage.visit();
});

When("eu clico no botão para abrir uma nova janela", () => {
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = Cypress.config().baseUrl + url;
    }).as('open');
  });
  browserWindowsPage.clickNewWindowButton();
});

Then("uma nova página deve ser aberta com a mensagem \"This is a sample page\"", () => {
  cy.get('@open').should('have.been.called');
  cy.url().should('include', '/sample');
  cy.get('#sampleHeading').should('have.text', 'This is a sample page');
});

Then("eu posso retornar para a página anterior", () => {
  cy.go('back');
  cy.url().should('include', '/browser-windows');
});
