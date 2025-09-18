class BrowserWindowsPage {
  visit() {
    cy.visit("https://demoqa.com/");
    cy.contains(".card-body", "Alerts, Frame & Windows").click();
    cy.contains("li", "Browser Windows").click();
  }

  clickNewWindowButton() {
    cy.get('#windowButton').click();
  }
}

export default BrowserWindowsPage;
