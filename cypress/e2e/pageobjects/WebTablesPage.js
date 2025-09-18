class WebTablesPage {
  visit() {
    cy.visit("https://demoqa.com/");
    cy.contains(".card-body", "Elements").click();
    cy.contains("li", "Web Tables").click();
  }

  clickAddButton() {
    cy.get('#addNewRecordButton').click();
  }

  fillRegistrationForm(userData) {
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);
    cy.get('#userEmail').type(userData.email);
    cy.get('#age').type(userData.age);
    cy.get('#salary').type(userData.salary);
    cy.get('#department').type(userData.department);
  }

  clearRegistrationForm() {
    cy.get('#firstName').clear();
    cy.get('#lastName').clear();
    cy.get('#userEmail').clear();
    cy.get('#age').clear();
    cy.get('#salary').clear();
    cy.get('#department').clear();
  }

  submitRegistrationForm() {
    cy.get('#submit').click();
  }

  findRowByEmail(email) {
    return cy.contains('.rt-tr-group', email);
  }

  clickEditButtonOnRowByEmail(email) {
    this.findRowByEmail(email).find('[title="Edit"]').click();
  }

  clickDeleteButtonOnRowByEmail(email) {
    this.findRowByEmail(email).find('[title="Delete"]').click();
  }

  verifyRowData(email, userData) {
    this.findRowByEmail(email).within(() => {
      cy.get('.rt-td').eq(0).should('have.text', userData.firstName);
      cy.get('.rt-td').eq(1).should('have.text', userData.lastName);
      cy.get('.rt-td').eq(2).should('have.text', userData.age);
      cy.get('.rt-td').eq(3).should('have.text', email);
      cy.get('.rt-td').eq(4).should('have.text', userData.salary);
      cy.get('.rt-td').eq(5).should('have.text', userData.department);
    });
  }

  verifyRowIsDeleted(email) {
    cy.get('body').should('not.contain.text', email);
  }
}

export default WebTablesPage;
