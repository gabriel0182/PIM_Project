<reference types="cypress" />;
import React from "react";
import "cypress-wait-until";

import PimLogin from "../PageObject/PimLogin";

const PL = new PimLogin();

class entity {
  pimqa() {
    PL.visit();
    PL.creDentials();
    PL.submit();

    return this;
  }

  newEntity() {
    const entitytab = cy.get("[id='2']").contains("Investment");
    entitytab.click({ force: true });
    entitytab.wait(2000);
    const addentityButton = cy
      .get("[class='buttonText text-primary']")
      .contains("Create Investment");
    addentityButton.click({ force: true });
    const testData = require("../../fixtures/entity.json");
    testData.forEach((testDataRow) => {
      const data = {
        entityname: testDataRow.entityname,
        units: testDataRow.units,
      };
      context(`Generating a test for ${data.entityname}`, () => {
        const entityName = cy.get("[formcontrolname='entityName']");
        entityName.clear();
        entityName.type(data.entityname);
        const units = cy.get("#newInvestor");
        units.select(`${data.units}`);
        const addEntity = cy.xpath("//button[contains(text(),'Submit')]");
        addEntity.click();
      });
      return this;
    });
  }

  assert() {
    const testData = require("../../fixtures/entity.json");
    testData.forEach((testDataRow) => {
      const data = {
        entityname: testDataRow.entityname,
      };
      context(`Generating a test for ${data.entityname}`, () => {
        const entitycreated = cy.get("#example-input-11");
        entitycreated.clear();
        entitycreated.type(`${data.entityname}`, "{enter}");
        const table = cy.get(".ag-cell-value").get("[role='gridcell']");
        table.within(() => {
          cy.get("a")
            .contains(`${data.entityname}`)
            .should("have.text", `${data.entityname}`);
        });
      });
    });
    return this;
  }
  updateJson() {
    let testData = require("../../fixtures/entity.json");
    cy.writeFile(
      "D:/Users/RP_Automation/Cypress_QA/cypress/fixtures/entity.json",
      [
        {
          entityname: `Entity AUT ${testData[0].increment++}`,
          units: "Committed capital",
          increment: testData[0].increment++,
        },
      ]
    );
  }
}

export default entity;
