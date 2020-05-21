<reference types="cypress" />;
import Loginpage from "../PageObject/Loginpage";
import "cypress-file-upload";
import React from "react";

const lp = new Loginpage();

class status {
  login() {
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

  activisttab() {
    const account = cy.get('[href="/applications"]');
    account.click();
    const tab = cy.get('[id="nav-tab-0"]');
    tab.click({ force: true });
    const search = cy.xpath("//input[@id='default-search']");
    search.click();
    search.type("Marcus{Enter}");
    const result = cy
      .xpath("//div[@class='k-grid-content k-virtual-content']")
      .xpath("//td[contains(text(),'Marcus')]")
      .xpath(
        "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/input[1]"
      );
    result.click();
    const assing = cy.xpath(
      "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined styles__StyledButton-sc-1fd4ltf-1 MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined styles__StyledBtnDropdown-sc-1fd4ltf-3 gRkpYV']//i[@class='material-icons'][contains(text(),'keyboard_arrow_down')]"
    );
    assing.click();
    const look = cy.xpath("//li[contains(text(),'Assign')]");
    look.click();
    const find = cy.xpath(
      "//div[@class='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl']//input[@placeholder='Search']"
    );
    find.click();
    find.type("Gabriel");
    const select = cy.xpath("//li[@id='68']").contains("Gabriel Nator");
    select.click({timeout: 40000});
    return this;
  }

  Chage_Status() {
    const account = cy.get('[href="/applications"]');
    account.click();
    const tab = cy.get('[id="nav-tab-0"]');
    tab.click({ force: true });
    const search = cy.xpath("//input[@id='default-search']");
    search.click({ force: true });
    search.type("Marcus{Enter}");
    const result = cy
      .xpath("//div[@class='k-grid-content k-virtual-content']")
      .xpath("//td[contains(text(),'Marcus')]")
      .xpath(
        "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[1]/input[1]"
      );
    result.click();
    const assing = cy.xpath(
      "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-outlined styles__StyledButton-sc-1fd4ltf-1 MuiButtonGroup-grouped MuiButtonGroup-groupedHorizontal MuiButtonGroup-groupedOutlined MuiButtonGroup-groupedOutlinedHorizontal MuiButtonGroup-groupedOutlined styles__StyledBtnDropdown-sc-1fd4ltf-3 gRkpYV']//i[@class='material-icons'][contains(text(),'keyboard_arrow_down')]"
    );
    assing.click();
    const accept = cy.xpath("//li[contains(text(),'Accept')]").contains('Accept');
    accept.click({ force: true });
    return this;
  }
}

export default status;
