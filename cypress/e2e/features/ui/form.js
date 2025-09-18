import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const randomString = (len = 5) =>
  Math.random().toString(36).substring(2, 2 + len);

const randomEmail = () => `${randomString()}@test.com`;
const randomNumber = () =>
  Math.floor(Math.random() * 9000000000 + 1000000000).toString();

Given("que eu esteja no formulário Practice Form", () => {
  cy.visit("https://demoqa.com");
  cy.contains(".card.mt-4.top-card", "Forms").click();
  cy.contains("li", "Practice Form").click();
});

When("eu preencho o formulário com dados aleatórios", () => {
  cy.get("#firstName").type(randomString());
  cy.get("#lastName").type(randomString());
  cy.get("#userEmail").type(randomEmail());

  const genders = ["#gender-radio-1", "#gender-radio-2", "#gender-radio-3"];
  cy.get(genders[Math.floor(Math.random() * genders.length)]).check({ force: true });

  cy.get("#userNumber").type(randomNumber());

  cy.get("#dateOfBirthInput").click();
  cy.get(".react-datepicker__year-select").select("1995");
  cy.get(".react-datepicker__month-select").select("May");
  cy.contains(".react-datepicker__day", "15").click();

  cy.get("#subjectsContainer input").type("Maths{enter}");

  ["#hobbies-checkbox-1", "#hobbies-checkbox-2", "#hobbies-checkbox-3"].forEach(
    (hobbie) => cy.get(hobbie).check({ force: true })
  );

  cy.get("#uploadPicture").selectFile("cypress/fixtures/test-file.txt");

  cy.get("#currentAddress").type("Endereço de teste " + randomString());

  cy.get("#state").click();
  cy.contains("div", "NCR").click();

  cy.get("#city").click();
  cy.contains("div", "Delhi").click();
});

When("eu submeto o formulário", () => {
  cy.get("#submit").click({ force: true });
});

Then("um popup de confirmação deve aparecer", () => {
  cy.get(".modal-title").should("contain.text", "Thanks for submitting the form");
});

Then("eu fecho o popup", () => {
  cy.get("body").click(0, 0);
});
