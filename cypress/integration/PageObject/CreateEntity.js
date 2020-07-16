<reference types="cypress" />;
import React from "react";
import 'cypress-wait-until';

import PimLogin from  '../PageObject/PimLogin'

const PL = new PimLogin()

class entity {
    pimqa() {
        PL.visit();
        PL.creDentials();
        PL.submit()

        return this;
    }

    newEntity(){
        const entitytab = cy.get("[id='2']").contains('Investment')
        entitytab.click({force: true})
        entitytab.wait(6000)
         const addentityButton = cy.get("[class='buttonText text-primary']").contains('Create Investment')
        addentityButton.click({force: true})
        const testData = require("../../fixtures/PIM.json");
        testData.forEach((testDataRow) => {
        const data = {
            entityname: testDataRow.entityname,
            units: testDataRow.units
         };
      context(`Generating a test for ${data.entityname}`, () => {
        const entityName = cy.get("[formcontrolname='entityName']")
        entityName.clear()
        entityName.type(data.entityname)
        const units = cy.get("#newInvestor")
        units.select(`${data.units}`)
        const addEntity = cy.xpath("//button[contains(text(),'Submit')]")
        addEntity.click()
      })
        return this;

    })
    }

    assert(){
        const testData = require("../../fixtures/PIM.json");
        testData.forEach((testDataRow) => {
        const data = {
            entityname: testDataRow.entityname
        };
        context(`Generating a test for ${data.entityname}`, () => {
        const entitycreated = cy.get('#example-input-11')
        entitycreated.clear()
        entitycreated.type(`${data.entityname}`, '{enter}')
        const table = cy.get("[class='ag-center-cols-container']").get("[role='row']").get("[role='gridcell']")
        table.within(() => {
            cy.get('a').contains(`${data.entityname}`).should('have.text',`${data.entityname}`)
        })
        
        })
    })
    return this;

    }
    updateJson(){
        
       localStorage.setItem("increment", "0");
       for(let i=0; i<localStorage.length; i++) {
        if (localStorage === 1){
          var increment = localStorage.getItem("increment");
          localStorage.setItem(increment++);
          var jsonObj = [{'Id':'1','entityname':`Bearer ${localStorage.getItem("increment")}`, 'units': 'Committed capital'}]
          cy.writeFile('D:/Users/RP_Automation/Cypress_QA/cypress/fixtures/entity.json', {jsonObj})
        }
       }

         //for (var i = 0; i < increment.length; i++) {
            //if (jsonObj[i].Id === 1) {
            //jsonObj[i].entityname = "Entity AUT 1" ;
           
              return;
            //}
          //}
        

    }

    }


    export default entity;

















