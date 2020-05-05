///  <reference types="cypress"/>

///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'
import 'cypress-file-upload';

const lp = new Loginpage ()

class activist
{

    activistform()

    {
    lp.Visit()
    const btn =cy.get('[href="/apply"]')
    btn.click()
    const btn2= cy.get('[href="/apply-activist"]')
    btn2.click()
          
    }


contactinfo()

{
    const testData = require("C:/Users/GabrielGomez/QA_Automation/Cypress_QA/cypress/integration/Activistform/list.json");
        testData.forEach((testDataRow) => {
            const data = {
              name: testDataRow.name,
              last_Name: testDataRow.last_Name
              //learn_about: testDataRow.learn_about
              
            };
        const FN=cy.xpath("//input[@id='10']")
        FN.clear()
        context(`Generating a test for ${data.name}`, () => {
        FN.type(data.name)
        const ln=cy.xpath("//input[@id='11']")
        ln.clear()
        ln.type(`${data.last_Name}{enter}`)
        //const learnabout =cy.xpath("//textarea[@id='57']")
        //learnabout.clear()
        //learnabout.type(`${data.learn_about}{ctrl}{p}`)
        return this
    
    })


})

}

Fileupload ()

{
    const fileName = 'abc.pdf'
        const atth1 = cy.xpath("//section[@id='Documents']//div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']//div[2]//div[1]//div[1]//div[1]//div[1]")
        atth1.attachFile(fileName, { subjectType: 'drag-n-drop' });
        const atth2 = cy.xpath("//body/div[@id='app']/main[@id='main-content']/div[@class='MuiContainer-root styles__StyledContainer-sc-1er4ee9-1 jddZvy MuiContainer-maxWidthLg']/div[@class='MuiGrid-root MuiGrid-container']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-9 MuiGrid-grid-lg-10']/section[@id='Documents']/div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']/div[@class='MuiBox-root jss657 styles__StyledBox-sc-1exyr8r-1 eMenPc']/div[@class='MuiGrid-root styles__StyledGrid-sc-1exyr8r-2 fDFUzK MuiGrid-container MuiGrid-spacing-xs-3']/div[4]/div[1]/div[1]/div[1]")
        atth2.attachFile(fileName, { subjectType: 'drag-n-drop' });
        cy.xpath("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[8]/div[2]/div[1]/div[1]/div[2]/fieldset[1]/div[1]/label[1]").click()
        const atth3 = cy.xpath("/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[8]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]")
        atth3.attachFile(fileName, { subjectType: 'drag-n-drop' });
        return this
 
}


submit ()
{
    cy.xpath("//span[contains(text(),'Submit')]").click()

}

}

export default activist
