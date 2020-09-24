///  <reference types="cypress"/>

Given("Token Request", () => {
  const AuthData = require("../../fixtures/Token.json");
  cy.request({
    method: "POST",
    url:
    "https://www-qa.realpage.com/login/identity/connect/token",
    body: AuthData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic cGltLXFhOnBpbi1xYQ==",
      Accept: "*/*",
      "Cache-Control": "no-cache",
      Host: "www-qa.realpage.com",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      "Content-Length": 129,
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200);
    expect(resp.body).to.not.eq(null);
    const Auth = resp.body.access_token;
    localStorage.setItem("token", Auth);
  })
  .then((resp) => {
    let getToken = `Bearer ${localStorage.getItem("token")}`;
  const addEntity = require("../../fixtures/addEntity.json");
  cy.request({
    method: "POST",
    url:
      "https://pim-wmu.realpageaim.net/AIMAppSvc/api/v1/AIMEntity",
    body: addEntity,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: getToken,
        Accept: "application/json, text/plain, */*",
        "Cache-Control": "no-cache",
        Host: "pim-wmu.realpageaim.net",
        Origin: "https://pim-wmu.realpageaim.net",
        Referer: "https://pim-wmu.realpageaim.net/AIMUI/entityDetails/1413/investors",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        "Content-Length": 196,
      },
     })
.then((resp) => {
  expect(resp.status).to.eq(200)
    /*expect(resp.body.result).to.not.eq(null),
    expect(resp.body.hasErrors).to.eq(false)*/
})
  })

When("Add a Investor API", () => {
})
Then("The Investor was Added", () => {})
})