///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Coordinator";



const co = new Coordinator();

Given("Open the account page", () => {
  co.admin_login();
});

When("I Fill out the form", () => {
  co.go_account();
  co.coor_form();


When("I Click in save button", () => {
  co.submitform();
});
})

  Then("Confirmation message should be shown", () => {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`The account was created successfully`)
    });

  })
