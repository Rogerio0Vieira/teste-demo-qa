import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SortablePage from '../../pageobjects/SortablePage';

const sortablePage = new SortablePage();

Given("que eu esteja na página de Sortable", () => {
  sortablePage.visit();
});

When("eu ordeno os itens da lista para a ordem crescente", () => {
  sortablePage.sortListToAscending();
});

Then("os itens da lista devem estar em ordem crescente", () => {
  sortablePage.verifyListOrder();
});
