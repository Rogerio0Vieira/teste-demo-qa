class ProgressBarPage {
  visit() {
    cy.visit("https://demoqa.com/");
    cy.contains(".card-body", "Widgets").click();
    cy.contains("li", "Progress Bar").click();
  }

  getStartStopButton() {
    return cy.get('#startStopButton');
  }

  getProgressBar() {
    return cy.get('[role="progressbar"]');
  }

  clickStartStopButton() {
    this.getStartStopButton().click();
  }

  getProgressBarValue() {
    return this.getProgressBar().invoke('attr', 'aria-valuenow').then(parseInt);
  }

  waitForCompletion() {
    cy.get('#resetButton', { timeout: 15000 }).should('be.visible');
  }

  clickResetButton() {
    cy.get('#resetButton').click();
  }

  verifyResetState() {
    this.getProgressBar().should('have.attr', 'aria-valuenow', '0');
    this.getStartStopButton().should('have.text', 'Start');
  }
}

export default ProgressBarPage;
