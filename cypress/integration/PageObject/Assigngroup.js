<reference types="cypress" />;
import React from "react";
import "cypress-wait-until";

import entity from "../PageObject/CreateEntity";

const access = new entity();

class assigngroup {
    selectAdmin(){
        access.pimqa();
        const Admin =  cy.get('#raul-left-navigation-items',{timeout:2000}).contains("Admin").click({ force: true })
          const IvenstMent = cy.get("[class='raul-left-navigation-item-display']").contains("Investment Model")
          IvenstMent.click({ force: true });
          IvenstMent.wait(6000)
        return this;
   }
   createGroup(){
       const groupMenu = cy.get("[id='groupLabel']")
       groupMenu.within(() => {
        cy.get("h2").contains("Group Type").click({ force: true });
      });
       const addGroup = cy.get("[class='col mt-3  mb-5']").get("[id='addEntityGroup']").contains("Add Group")
       addGroup.click({ force: true })
       addGroup.wait(2000)
    const testData = require("../../fixtures/group.json");
    testData.forEach((testDataRow) => {
      const data = {
        groupname: testDataRow.groupname,
      };
      context(`Generating a test for ${data.groupname}`, () => {
          const groupName = cy.get("[class='form-inline p-0']")
          groupName.within(() => {
            cy.get("div").get("[placeholder='Investment Group Name']").type(data.groupname);
          });
        });
      const saveGroup = cy.get("[type='submit']").contains("Save")
      saveGroup.click({ force: true })
    })
 return this;
     }

addEntity(){
    const entityType = cy.get("[id='entityLabel']")
    entityType.within(() => {
        cy.get("h2").contains("Entity Type").click({ force: true });
    })
    const addEntityType = cy.get('#addEntityType').contains("Add Entity")
    addEntityType.click({ force: true })
    addEntityType.wait(2000)
        const testData = require("../../fixtures/entity.json");
    testData.forEach((testDataRow) => {
      const data = {
        entityname: testDataRow.entityname,
        units: testDataRow.units,
      };
      context(`Generating a test for ${data.groupname}`, () => {
        const entityName = cy.get("[class='form-group']").get("[placeholder='Investment Entity Name']")
        entityName.type(data.entityname)
        });
        const saveEntity = cy.get('.float-right').contains("Save")
        saveEntity.click({ force: true })
        saveEntity.reload()
    })
    return this;
}
assignEntityGroup(){
  const entityType = cy.get("[id='entityLabel']")
  entityType.within(() => {
      cy.get("h2").contains("Entity Type").click({ force: true },{timeout:4000});
  })
  const testData = require("../../fixtures/entity.json");
    testData.forEach((testDataRow) => {
      const data = {
        entityname: testDataRow.entityname
              };
      context(`Generating a test for ${data.entityname}`, () => {
        const entityCreated = cy.get('.ng-star-inserted').get("[data-toggle='tab']").contains(`${data.entityname}`).click({ force: true })
        entityCreated.wait(6000)
        })
        const testData = require("../../fixtures/group.json");
    testData.forEach((testDataRow) => {
      const data = {
        groupname: testDataRow.groupname,
      };
      context(`Generating a test for ${data.groupname}`, () => {
        const ivestGroup = cy.get("[class='heading text-charcoal-50 ng-star-inserted']").contains("Assign Investment Group").click({ force: true })
        const group = cy.get("[class='ng-star-inserted']")
        group.within(() => {
          cy.get("select").select(`${data.groupname}`)
          })
    })
  })
})
}
assert(){
  const alert = cy.get('.raul-success-notification').get("[class='raul-notification-title']")
  alert.contains("Success").should('have.text','Success')
    const message = cy.get("[class='raul-notification-description']")
    message.should('have.text','Your request was processed successfully.')
  }


}
export default assigngroup;