Given("GO TO API", () => {});
When("Execute Request", () => {});

Then("Get response", () => {
  cy.request(
    "GET",
    `https://ej-qa-be.azurewebsites.net/api/Application/RetrieveApplication?lastName=Merk&phone=6745678983`
  ).then((resp) => {
    if (
      (expect(resp.status).to.eq(200),
      expect(resp.body.result).to.not.eq(null),
      expect(resp.body.result.questions[1].value).to.eq("Merk"),
      expect(resp.body.result.questions[8].value).to.eq("6745678983"))
    ) {
      cy.log("Test Pass");
    } else if (expect(resp.status).to.not.eq(200)) {
      Cypress.env("RETRIES", 2);
    }
  });
  const loginData = require("../../fixtures/login.json");
  cy.request({
    method: "POST",
    url: "https://ej-qa-be.azurewebsites.net/api/Auth/login",
    body: loginData,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((resp) => {
      expect(resp.status).to.eq(200),
        expect(resp.body.result).to.not.eq(null),
        expect(resp.body.result.firstName).to.eq("Fernando"),
        expect(resp.body.result.role).to.eq("Administrator");
      const Auth = resp.body.result.authToken;
      localStorage.setItem("token", Auth);
    })
    .then((resp) => {
      let getToken = `Bearer ${localStorage.getItem("token")}`;
      console.log(getToken);
      cy.request({
        method: "POST",
        url:
          "https://ej-qa-be.azurewebsites.net/api/Application/AssignedCoordinatorApplication",
        body: {
          idApplicationList: [91],
          coordinatorId: 68,
        },
        headers: {
          "content-type": "application/json",
          Authorization: getToken,
        },
      });
    })
    .then((resp) => {
      if (
        (expect(resp.status).to.eq(200),
        expect(resp.body.result).to.not.eq(null),
        expect(resp.body.hasErrors).to.eq(false))
      ) {
        cy.log("Test Pass");
      } else expect(resp.status).to.not.eq(200);
      Cypress.env("RETRIES", 2);
    });
  const testData = require("../../fixtures/order.json");
  let getToken = localStorage.getItem("token");
  cy.request({
    method: "POST",
    url: "https://ej-qa-be.azurewebsites.net/api/Order/UpdateStatus",
    body: testData,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${getToken}`,
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200),
      expect(resp.body.hasErrors).to.eq(false),
      expect(resp.body.result).to.not.eq(null);
    if (expect(resp.status).to.eq(200)) {
      Cypress.env("RETRIES", 2);
    }
    localStorage.removeItem("token");
  });
});
