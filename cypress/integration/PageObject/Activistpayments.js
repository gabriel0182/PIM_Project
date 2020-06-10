<reference types="cypress" />;
import React from "react";
Cypress.env("RETRIES", 0);

class Apayments {
  Ativist_Login() {
    cy.visit("https://ej-qa-web.azurewebsites.net/");
    Cypress.Cookies.preserveOnce("sessionid");
    const testData = require("../../fixtures/payments.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
      const FN = cy.xpath("//input[@id='username']");
      FN.clear();
      context(`Generating a test for ${data.username}`, () => {
        FN.type(data.username);
        const ln = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]"
        );
        ln.clear();
        ln.type(`${data.password}`);
        const submit = cy.xpath("//span[contains(text(),'Sign In')]");
        submit.click();
        
      });
      return this;
    });
  }

  Go_Payments() {
    const pay = cy.get("[href='/payments']").should("be.visible");
    pay.click({ force: true });
    pay.wait(4000);
    cy.get("iframe:visible").invoke("show");
    cy.get("iframe:visible").within(($iframe) => {
      const $body = $iframe.contents();
      cy.wrap($body.find('[data-funding-source="paypal"]'))
        .focus()
        .click({ force: true });
      cy.wait(2000);
    });
    if (Cypress.env("FAIL")) {
      Cypress.currentTest.retries(2);
    }
    return this;
  }

  Make_Payment() {
    const testData = require("../../fixtures/payments.json");
    testData.forEach((testDataRow) => {
      const data = {
        email: testDataRow.email,
        cardNumber: testDataRow.cardNumber,
        expirationDate: testDataRow.expirationDate,
        postalCode: testDataRow.postalCode,
        securityCode: testDataRow.securityCode,
        phoneNumber: testDataRow.phoneNumber,
        firstName: testDataRow.firstName,
        lastName: testDataRow.lastName,
        line1: testDataRow.line1,
        city: testDataRow.city,
        state: testDataRow.state,
        country: testDataRow.country,
      };

      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpen").returns(win);
      });

      cy.focused("[class=' desktop js ']").first().focus().click();

      const em = cy.find("[id='email']").invoke("show");
      em.click();
      context(`Generating a test for ${data.email}`, () => {
        em.type(data.email);

        const exp = cy
          .xpath(
            "//div[@class='MuiContainer-root styles__StyledContainer-besxrb-1 esNJCQ']"
          )
          .should("be.visible");
        exp.click();
        exp.type(`${data.expirationDate}`);
        const sc = cy.xpath(
          "//div[@class='MuiContainer-root styles__StyledContainer-besxrb-1 esNJCQ']"
        );
        sc.click();
        sc.type(`${data.securityCode}`);
                  Cypress.env('RETRIES', 2);
      
        return this;
      });
    });
  }
}

export default Apayments;
