///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
var csv = require("csvtojson");
const fs = require('fs');


const lp = new Loginpage();
let csvFilePath = "../../../fixtures/datafile.csv"
class Coordinator {
  admin_login() {
    csv()
      .fromFile(csvFilePath)
      .then(function (jsonArrayObj) {
        //when parse finished, result will be emitted here.
        // console.log(jsonArrayObj);
        jsonArrayObj.map((testDataRow) => {
          const data = {
            username: testDataRow.usernaname,
            password: testDataRow.password,
          };
        });
      });

    lp.Visit();
    const user = cy.xpath("//input[@id='username']")
    context(`Generating a test for ${data.username}`, () => {
      user.type(data.username);
      user.type(this.datafile.username);
      const pass = cy.xpath("//input[@id='password']");
      pass.type(`${data.password}{enter}`);
    });
  }

  login() {
    const submit = cy.xpath("//span[contains(text(),'Sign In')]");
    submit.click();
  }

  account_tab() {
    const menu = cy.xpath(
      "/html[1]/body[1]/div[1]/aside[1]/nav[1]/ul[1]/li[4]/a[1]/i[1]"
    );
    menu.click;
    const tab = cy.xpath(
      "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/header[1]/div[1]/div[2]/div[1]/a[2]/span[1]"
    );
    tab.click;
  }
}

export default Coordinator
