<reference types="cypress" />;
import React from "react";


class PimLogin {
  visit() {
    //cy.visit("https://pimqa.realpageaim.net/AIMUI/portfolio");
    //cy.visit("https://pim-wmu.realpageaim.net/AIMUI/portfolio")
    //cy.visit("http://www-qa.realpage.com/home");
    //cy.visit("https://pimqa.realpage.com/AIMUI/portfolio");
    //cy.visit("https://pim-wmu.asseteye.net/AIMUI/portfolio")
    const homePage = cy.clearCookies();
    homePage.clearLocalStorage();
    homePage.visit("https://aimunified-wmu.realpageaim.net/AIMUI/portfolio")
    return this;
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
       });
    });
  }

  subMit(){

    const next = cy.get("[value='login']");
    next.click({ force: true });
    next.wait(1000);

  }

}

export default PimLogin;
