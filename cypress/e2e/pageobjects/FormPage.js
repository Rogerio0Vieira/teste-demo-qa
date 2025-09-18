class FormPage {
  visit() {
    cy.visit("https://demoqa.com/");
    cy.contains(".card-body", "Forms").click();
    cy.contains("li", "Practice Form").click();
  }

  fillForm(userData) {
    cy.get("#firstName").type(userData.firstName);
    cy.get("#lastName").type(userData.lastName);
    cy.get("#userEmail").type(userData.email);
    cy.get("#userNumber").type(userData.mobileNumber);
    cy.get("#currentAddress").type(userData.address);
    cy.contains('label', userData.randomGender).click();
    cy.contains('label', userData.randomHobby).click();
    cy.get("#subjectsInput").type(`${userData.randomSubject}{enter}`);
    cy.get("#uploadPicture").selectFile("cypress/fixtures/test-file.txt");
    cy.get("#state").click();
    cy.contains("div", userData.randomState).click();
    cy.get("#city").click();
    cy.contains("div", userData.randomCity).click();
  }

  submit() {
    cy.get("#submit").click();
  }

  verifyModalContent(userData) {
    cy.get(".modal-title").should("have.text", "Thanks for submitting the form");
    cy.get(".modal-body").should('contain.text', `${userData.firstName} ${userData.lastName}`);
    cy.get(".modal-body").should('contain.text', userData.email);
    cy.get(".modal-body").should('contain.text', userData.randomGender);
    cy.get(".modal-body").should('contain.text', userData.mobileNumber);
  }

  closeModal() {
    cy.get('body').type('{esc}');
  }
}

export default FormPage;
