Given("GO TO API", () => {});
When("Execute Request", () => {});

Then("Get response", () => {
  cy.request(
    "GET",
    `https://ej-qa-be.azurewebsites.net/api/Application/RetrieveApplication?lastName=Merk&phone=6745678983`
  ).then((resp) => {
    expect(resp.status).to.eq(200),
      expect(resp.body.result).to.not.eq(null),
      expect(resp.body.result.questions[1].value).to.eq("Merk");
    expect(resp.body.result.questions[8].value).to.eq("6745678983");
  });
   cy.request({
    method: "POST",
    url: "https://ej-qa-be.azurewebsites.net/api/Auth/login",
    body: {
      userName: "FernandoWick",
      password: "Test123*",
      deviceId: "ABC123",
      isWebUser: "true",
    },
    headers: {
      "content-type": "application/json",
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200),
      expect(resp.body.result).to.not.eq(null),
      expect(resp.body.result.firstName).to.eq("Fernando"),
      expect(resp.body.result.role).to.eq("Administrator");
  });
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
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGZXJuYW5kb1dpY2siLCJqdGkiOiIyMWE3NDI3Zi0xMzExLTRkYzUtYmQzNi00NWM0ODY4ZTJiNmYiLCJpYXQiOjE1ODk4OTc1NjAsImlkIjoiNiIsInVzZXJFbWFpbCI6ImdhYnJpZWwuZ29tZXpAMTBwZWFybHMuY29tIiwidXNlclJvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZmlyc3ROYW1lIjoiRmVybmFuZG8iLCJsYXN0TmFtZSI6IldpY2siLCJSb2xlVHlwZSI6IkFkbWluaXN0cmF0b3IiLCJkZXZpY2VJZCI6IjEyM0FCQyIsInVzZXJOYW1lIjoiRmVybmFuZG9XaWNrIiwibmJmIjoxNTg5ODk3NTU5LCJleHAiOjE1ODk5ODM5NTksImlzcyI6IndlYkFwaSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTk0MDQvIn0.o_UV4WzKvUQq2DcWdEEKEqwkZX1sMCvZY0fV9iDwizY",
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200), expect(resp.body.result).to.not.eq(null);
    expect(resp.body.hasErrors).to.eq(false);
  });
  const testData = require("../../fixtures/order.json");
  cy.request({
    method: "POST",
    url: "https://ej-qa-be.azurewebsites.net/api/Order/UpdateStatus",
    body: testData,
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGZXJuYW5kb1dpY2siLCJqdGkiOiIyMWE3NDI3Zi0xMzExLTRkYzUtYmQzNi00NWM0ODY4ZTJiNmYiLCJpYXQiOjE1ODk4OTc1NjAsImlkIjoiNiIsInVzZXJFbWFpbCI6ImdhYnJpZWwuZ29tZXpAMTBwZWFybHMuY29tIiwidXNlclJvbGUiOiJBZG1pbmlzdHJhdG9yIiwiZmlyc3ROYW1lIjoiRmVybmFuZG8iLCJsYXN0TmFtZSI6IldpY2siLCJSb2xlVHlwZSI6IkFkbWluaXN0cmF0b3IiLCJkZXZpY2VJZCI6IjEyM0FCQyIsInVzZXJOYW1lIjoiRmVybmFuZG9XaWNrIiwibmJmIjoxNTg5ODk3NTU5LCJleHAiOjE1ODk5ODM5NTksImlzcyI6IndlYkFwaSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTk0MDQvIn0.o_UV4WzKvUQq2DcWdEEKEqwkZX1sMCvZY0fV9iDwizY",
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200),
      expect(resp.body.hasErrors).to.eq(false),
      expect(resp.body.result).to.not.eq(null);
  });
});
