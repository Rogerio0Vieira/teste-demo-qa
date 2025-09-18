import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let user = {};
let token = "";
let userId = "";
let chosenIsbns = [];

Given("que eu crie um novo usuário via API", () => {
  user = { userName: `qa_${Date.now()}`, password: "P@ssword123!" };
  cy.request("POST", "/Account/v1/User", user).then((res) => {
    expect(res.status).to.eq(201);
    userId = res.body.userID;
  });
});

When("eu gere um token de acesso", () => {
  cy.request("POST", "/Account/v1/GenerateToken", user).then((res) => {
    expect(res.status).to.eq(200);
    token = res.body.token;
  });
});

When("eu verifique se o usuário está autorizado", () => {
  cy.request({
    method: "POST",
    url: "/Account/v1/Authorized",
    body: user,
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.eq(true);
  });
});

When("eu liste os livros disponíveis", () => {
  cy.request("GET", "/BookStore/v1/Books").then((res) => {
    expect(res.status).to.eq(200);
    chosenIsbns = res.body.books.slice(0, 2).map((b) => b.isbn);
  });
});

When("eu alugue dois livros para o usuário", () => {
  const payload = {
    userId,
    collectionOfIsbns: chosenIsbns.map((isbn) => ({ isbn })),
  };
  cy.request({
    method: "POST",
    url: "/BookStore/v1/Books",
    headers: { Authorization: `Bearer ${token}` },
    body: payload,
  }).then((res) => {
    expect(res.status).to.eq(201);
  });
});

Then("eu devo ver os livros alugados nos detalhes do usuário", () => {
  cy.request({
    method: "GET",
    url: `/Account/v1/User/${userId}`,
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.books).to.have.length(2);
  });
});
