<reference types="cypress" />;
import React from "react";
import "cypress-wait-until";

import entity from "../PageObject/CreateEntity";

const ent = new entity();

class ownerShip {
  structurePage() {
    const testData = require("../../fixtures/searchEntity.json");
    testData.forEach((testDataRow) => {
      const data = {
        entityname: testDataRow.entityname,
      };
      context(`Generating a test for ${data.entityname}`, () => {
        const investTab = cy.get("[id='2']").contains("Investment");
        investTab.click({ force: true });
        investTab.wait(12000);
        const entitycreated = cy.xpath(
          "/html[1]/body[1]/app-root[1]/ui-shell[1]/div[1]/ui-main-content[1]/main[1]/section[1]/app-portfolio[1]/div[1]/div[2]/div[1]/div[2]/div[1]/input[1]"
        );
        entitycreated.click({ force: true });
        entitycreated.type(`${data.entityname}`, "{enter}").wait(4000);
        const table = cy.get("[role='rowgroup']");
        table.within(() => {
          cy.get("div")
            .get("[role='gridcell']")
            .contains(`${data.entityname}`)
            .click({ force: true });
        });
      });
    });
    const strucTure = cy
      .get("[tabindex='0']")
      .get("[class='menuItemName']")
      .contains("Structure");
    strucTure.click({ force: true });
    strucTure.wait(5000);
    return this;
  }

  addowner() {
    const canvas = cy.get("canvas");
    canvas.click(410, 150, { force: true });
    canvas.click(475, 150, { force: true });
    canvas.wait(5000);
    const ownerform = cy.get("[class='modal-content']");
    ownerform.within(() => {
      cy.get("button")
        .get("[class='button button-primary ng-star-inserted']")
        .contains("New Investor")
        .click({ force: true });
    });
    const testData = require("../../fixtures/investor.json");
    testData.forEach((testDataRow) => {
      const data = {
        investorname: testDataRow.investorname,
        type: testDataRow.type,
        units: testDataRow.units,
        group: testDataRow.group,
        amount: testDataRow.amount,
        role: testDataRow.role,
        date: testDataRow.date,
      };
      context(`Generating a test for ${data.investorname}`, () => {
        const name = cy.get("[class='p-4 ng-star-inserted']");
        name.within(() => {
          cy.get("input");
          cy.get("[placeholder='New Investor Name (MaxLength: 50)']");
          name.type(`${data.investorname}`);
          name.wait(1000)
        });
        const entityType = cy
          .xpath(
            "/html[1]/body[1]/app-root[1]/ui-shell[1]/div[1]/ui-main-content[1]/main[1]/section[1]/app-entity-details[1]/div[1]/div[1]/div[1]/app-entity-structure[1]/div[1]/app-add-investor-investment[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/select[1]"
          )
          .select(`${data.type}`);
        const units = cy
          .xpath(
            "/html[1]/body[1]/app-root[1]/ui-shell[1]/div[1]/ui-main-content[1]/main[1]/section[1]/app-entity-details[1]/div[1]/div[1]/div[1]/app-entity-structure[1]/div[1]/app-add-investor-investment[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/select[1]"
          )
          .select(`${data.units}`);
          const nextButton = cy
          .get("[class='button button-primary ng-star-inserted']")
          .contains("Next");
        nextButton.click({ force: true });
        nextButton.wait(2000);
        const amount = cy.get("[id='ownerAmount']");
        amount.type(`${data.amount}`);
        const role = cy.get("[formcontrolname='entityRoleNameDropdown']");
        role.select(`${data.role}`);
        const date = cy.xpath(
          "/html[1]/body[1]/app-root[1]/ui-shell[1]/div[1]/ui-main-content[1]/main[1]/section[1]/app-entity-details[1]/div[1]/div[1]/div[1]/app-entity-structure[1]/div[1]/app-add-investor-investment[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[4]/app-pim-date-picker[1]/div[1]/ui-datepicker[1]/div[1]/input[1]"
        );
        date.type(`${data.date}`);
      });
      const finish = cy
        .get("[class='button button-primary']")
        .contains("Finish");
      finish.click({ force: true });
      finish.wait(2000)
      });
      return this
  }

  confirmOwnership() {
    const investorTab = cy
      .get("[tabindex='0']")
      .get("[class='menuItemName']")
      .contains("Investors")
      investorTab.click({force:true})
    investorTab.wait(2000);
    const testData = require("../../fixtures/investor.json");
    testData.forEach((testDataRow) => {
      const data = {
        investorname: testDataRow.investorname,
      };
      context(`Generating a test for ${data.investorname}`, () => {
        const investorTable = cy.get("[class='ag-header-cell ag-header-cell-sortable']").get("[class='ag-pinned-left-cols-container']")
        investorTable.within(() => {
          cy.get("div")
            .get("[role='gridcell']")
            .contains(`${data.investorname}`)
            .should("have.text", `${data.investorname}`);
        });
      });
    });
    return this
  }
  updateInvestor() {
    let testData = require("../../fixtures/investor.json");
    cy.writeFile(
      "D:/Users/RP_Automation/Cypress_QA/cypress/fixtures/investor.json",
      [
        {
          investorname: `Invest AUT ${testData[0].increment++}`,
          type: "Investor",
          units: "Committed capital",
          group: "new platform",
          amount: 250000,
          role: "Investor",
          date: "Sep. 14, 2020",
          increment: testData[0].increment++,
        },
      ]
    );
  }
}
export default ownerShip;
