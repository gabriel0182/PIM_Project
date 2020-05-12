///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import "cypress-wait-until";

const lp = new Loginpage();
class Coordinator {
  admin_login() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        username: testDataRow.username,
        password: testDataRow.password,
      };
      lp.Visit();
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
        return this;
        });
    });
  }

  go_account() {
    const account =cy.get('[href="/accounts"]')
    account.click();
   const tab = cy.get('[id="nav-tab-1"]')
    tab.click({force:true});
    const add = cy.get('[type="button"]').get('.FsowF').contains('Add Account').should('be.visible');
    add.click();
    cy.get('.kXMnzN')
    return this;
  }

  coor_form() {
    const testData = require("../../fixtures/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        coorname: testDataRow.coorname,
        coorlastname: testDataRow.coorlastname,
        email: testDataRow.email,
        phone: testDataRow.phone,
      };

      const coorfn = cy.xpath("//input[@id='FirstName']");
      coorfn.clear();
      context(`Generating a test for ${data.coorname}`, () => {
        coorfn.type(data.coorname);
        const coorln = cy.xpath("//input[@id='LastName']");
        coorln.clear();
        coorln.type(`${data.coorlastname}{enter}`);
        const cooremail = cy.xpath("//input[@id='Mail']");
        cooremail.clear();
        cooremail.type(`${data.email}{enter}`);
        const coorphone = cy.xpath("//input[@id='CellPhone']");
        coorphone.clear();
        coorphone.type(`${data.phone}{enter}`);
        return this;
      });
    });
  }

  submitform() {
    const save = cy.xpath("//span[contains(text(),'Save')]");
    save.click();
    return this;
  }
}

export default Coordinator;
