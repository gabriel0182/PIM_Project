///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import Coordinator from "../PageObject/Coordinator";


const co = new Coordinator();

Given("Open the account page", () => {
  co.admin_login();
});

When("I Fill out the form", () => {
  co.login();

  When("I Click in subbmit button", () => {
    co.account_tab();
  });

  Then("Confirmation message should be shown", () => {
    const assert = cy.xpath("//h2[@class='styles__Title-sc-10mt17g-1 bdhaoO']");
    assert.should("have.text", "Welcome Fernando!");
  });
});
