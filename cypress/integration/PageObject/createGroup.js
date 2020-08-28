<reference types="cypress" />;
import React from "react";
import "cypress-wait-until";

import entity from "../PageObject/CreateEntity";

const access = new entity();

class group {
  addNew() {
    access.pimqa();
    const porftolioMenu = cy.get(".has-subitems");
    porftolioMenu.within(() => {
      cy.get("span").contains("Portfolio").click({ force: true });
    });
    const gropuLink = cy
      .get("[routerlink='/portfolioGroupList']")
      .within(() => {
        cy.get("span").contains("Investment Groups").click({ force: true });
      });
    const strategyTab = cy
      .get("[role='tablist']")
      .get("[class='nav-item']")
      .within(() => {
        cy.get("a").contains("Strategy").click({ force: true });
        strategyTab.wait(2000);
      });
    const addgroupbutton = cy
      .get("[class='buttonText text-primary']")
      .contains("Create Strategy")
      .click({ force: true });
    addgroupbutton.wait(2000);
    return this;
  }
  addGroup() {
    const testData = require("../../fixtures/group.json");
    testData.forEach((testDataRow) => {
      const data = {
        groupname: testDataRow.groupname,
      };
      context(`Generating a test for ${data.groupname}`, () => {
        const namegroup = cy.get("[class='form-group']").within(() => {
          cy.get("input")
            .get("[formcontrolname='entityName']")
            .type(data.groupname);
        });
      });
      const submit = cy
        .get("[class='button button-primary']")
        .get("[type='button']");
      submit.contains("Submit");
      submit.click({ force: true });
    });
  }
  assertion() {
    const testData = require("../../fixtures/group.json");
    testData.forEach((testDataRow) => {
      const data = {
        groupname: testDataRow.groupname,
      };
      context(`Generating a test for ${data.groupname}`, () => {
        const search = cy.get("[id='search-input']").within(() => {
          cy.get("[id='example-input-11']").type(data.groupname, "{enter}");
        });
        const findgroup = cy
          .get("[class='ag-center-cols-container']")
          .get("[role='rowgroup']")
          .within(() => {
            cy.get("a")
              .get("[col-id='Name']")
              .contains(`${data.groupname}`)
              .should("have.text", `${data.groupname}`).click({force: true});
              return this;
          });
      });
    });
  }
  delete(){
    const del = cy.get("[class='text-info editable-text-field-delete-icon']").contains('| Delete')
    del.click({force: true})
    const ok = cy.get("[class='modal-dialog']")
    ok.within(() => {
      cy.get("[type='button']")
      .contains('OK')
      .click({force: true})
    })
  }
}

export default group;
