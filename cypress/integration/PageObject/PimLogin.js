<reference types="cypress" />;
import React from "react";

class PimLogin {
  visit() {
    cy.visit("https://aimunified-wmu.realpageaim.net/AIMUI/portfolio");
    //cy.visit("https://pim-wmu.asseteye.net/AIMUI/portfolio")
    //cy.get("[class='login-form-container']").should("be.visible");
  }

  creDentials() {
    const testData = require("../../fixtures/PIM.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
      context(`Generating a test for ${data.username}`, () => {
        const email = cy.get("#Username");
        email.clear();
        email.type(data.username);
        const pass = cy.get("#Password");
        pass.clear();
        pass.type(`${data.password}`);
        pass.wait(1000);
      });
    });
  }

  submit() {
    const button = cy.get("button[value='login']");
    button.click();
  }
}

export default PimLogin;
