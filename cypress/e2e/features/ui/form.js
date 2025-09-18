import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import FormPage from '../../pageobjects/FormPage';

const formPage = new FormPage();

const generateRandomNumberString = () => {
  let result = '';
  const characters = '0123456789';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

let testData;

const generateRandomData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const mobileNumber = generateRandomNumberString();
  const address = faker.location.streetAddress();
  const genders = ['Male', 'Female', 'Other'];
  const randomGender = Cypress._.sample(genders);
  const hobbies = ['Sports', 'Reading', 'Music'];
  const randomHobby = Cypress._.sample(hobbies);
  const subjects = ['Maths', 'Physics', 'English', 'Arts'];
  const randomSubject = Cypress._.sample(subjects);
  const stateCityMap = {
    'NCR': ['Delhi', 'Gurgaon', 'Noida'],
    'Uttar Pradesh': ['Agra', 'Lucknow', 'Merrut'],
    'Haryana': ['Karnal', 'Panipat'],
    'Rajasthan': ['Jaipur', 'Jaiselmer']
  };
  const randomState = Cypress._.sample(Object.keys(stateCityMap));
  const randomCity = Cypress._.sample(stateCityMap[randomState]);
  return {
    firstName, lastName, email, mobileNumber, address, randomGender,
    randomHobby, randomSubject, randomState, randomCity
  };
};

Given("que eu esteja no formulário Practice Form", () => {
  formPage.visit();
});

When("eu preencho o formulário com dados aleatórios", () => {
  testData = generateRandomData();
  formPage.fillForm(testData);
});

When("eu submeto o formulário", () => {
  formPage.submit();
});

Then("um popup de confirmação deve aparecer", () => {
  formPage.verifyModalContent(testData);
});

Then("eu fecho o popup", () => {
  formPage.closeModal();
});
