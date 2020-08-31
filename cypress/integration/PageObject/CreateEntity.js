<reference types="cypress" />;
import React from "react";
import "cypress-wait-until";

import PimLogin from "../PageObject/PimLogin";

const PL = new PimLogin();

class entity {
  pimqa() {
    PL.visit();
    PL.creDentials();
    PL.subMit();

    return this;
  }

  newEntity() {
    const entitytab = cy.get("[id='2']").contains("Investment");
    entitytab.click({ force: true });
    entitytab.wait(6000);
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
        const entitycreated = cy.get("[id='example-input-11']");
        entitycreated.clear();
        entitycreated.type(`${data.entityname}`, "{enter}").wait(4000);
        const table = cy.get("[role='gridcell']").get("[col-id='Name']")
        table.within(() => {
          cy.get("a")
            .contains(`${data.entityname}`).click({force: true})
        })
        });
      });
    return this;
  }

delete(){
const del = cy.get("[class='text-info editable-text-field-delete-icon']").contains('| Delete')
del.click({force: true})
const confirm = cy.get("[class='dialog']").get("[class='pim-generic-dialog modal-content raul-modal-centered']")
confirm.within(() => {
  cy.get("div")
    .contains('OK').click({force: true})
})
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
