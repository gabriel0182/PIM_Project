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
    const btn2= cy.get('[href="/apply-activist"]')
    btn2.click()
          
    }


contactinfo(value)

{
    {
        const FN=cy.get('[id="10"]',{Timeout: 6000})
        FN.clear
        FN.type(value)
        //const ln=cy.xpath("//input[@id='11']")
        //ln.clear
        //ln.type(value2)
        return this
    
    }

}


submit ()
{
    cy.xpath("//span[contains(text(),'Submit')]").click()

}

}

export default activist
