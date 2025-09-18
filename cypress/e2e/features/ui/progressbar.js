import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProgressBarPage from '../../pageobjects/ProgressBarPage';

const progressBarPage = new ProgressBarPage();

Given("que eu esteja na página de Progress Bar", () => {
  progressBarPage.visit();
});

When("eu inicio a barra de progresso", () => {
  progressBarPage.clickStartStopButton();
});

Then("eu a paro antes de 25%", () => {
  progressBarPage.clickStartStopButton();
});

Then("o valor da barra de progresso deve ser menor ou igual a 25%", () => {
  progressBarPage.getProgressBarValue().should('be.lte', 25);
});

When("eu continuo a barra de progresso até 100%", () => {
  progressBarPage.clickStartStopButton();
  progressBarPage.waitForCompletion();
});

Then("eu a reseto", () => {
  progressBarPage.clickResetButton();
});

Then("o valor da barra de progresso deve retornar a 0%", () => {
  progressBarPage.getProgressBarValue().should('be.lte', 0);
});
