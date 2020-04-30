///  <reference types="cypress"/>

///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'

const lp = new Loginpage ()

class activist
{

    activistform()

    {
    lp.Visit()
    const btn =cy.get('[href="/apply"]')
    btn.click()
    const btn2= cy.get('[href="/apply-activist"]',{Timeout: 6000})
    btn2.click()
          
    }


contactinfo()

{
    const testData = require("C:/Users/GabrielGomez/QA_Automation/Cypress_QA/cypress/integration/Activistform/list.json");
        testData.forEach((testDataRow) => {
            const data = {
              name: testDataRow.name,
              last_Name: testDataRow.last_Name
              
            };
        const FN=cy.xpath("//input[@id='10']")
        FN.clear
        context(`Generating a test for ${data.name}`, () => {
        FN.type(data.name)
        const ln=cy.xpath("//input[@id='11']")
        ln.clear
        ln.type(`${data.last_Name}{enter}`)
        return this
    
    })

})

}


submit ()
{
    cy.xpath("//span[contains(text(),'Submit')]").click()

}

}

export default activist
