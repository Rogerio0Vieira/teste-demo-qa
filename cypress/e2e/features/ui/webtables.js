import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import WebTablesPage from '../../pageobjects/WebTablesPage';

const webTablesPage = new WebTablesPage();
let newUserData;
let editedUserData;

const generateUserData = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email().toLowerCase(),
  age: faker.number.int({ min: 18, max: 99 }).toString(),
  salary: faker.number.int({ min: 1000, max: 20000 }).toString(),
  department: faker.commerce.department()
});

Given("que eu esteja na página de Web Tables", () => {
  webTablesPage.visit();
});

When("eu adiciono um novo registro com dados aleatórios", () => {
  newUserData = generateUserData();
  webTablesPage.clickAddButton();
  webTablesPage.fillRegistrationForm(newUserData);
  webTablesPage.submitRegistrationForm();
  webTablesPage.verifyRowData(newUserData.email, newUserData);
});

When("eu edito o registro recém-criado com novos dados", () => {
  editedUserData = generateUserData();
  webTablesPage.clickEditButtonOnRowByEmail(newUserData.email);
  webTablesPage.clearRegistrationForm();
  webTablesPage.fillRegistrationForm(editedUserData);
  webTablesPage.submitRegistrationForm();
  webTablesPage.verifyRowData(editedUserData.email, editedUserData);
});

Then("eu deleto o registro editado com sucesso", () => {
  webTablesPage.clickDeleteButtonOnRowByEmail(editedUserData.email);
  webTablesPage.verifyRowIsDeleted(editedUserData.email);
});
