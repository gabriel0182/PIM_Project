///  <reference types="cypress"/>

import PimLogin from  '../PageObject/PimLogin'

const lg = new PimLogin ()


Given('Open PIM URL', () => {

  lg.visit()
  
  })
   
  When('I type the User and Password', () => { 

    
    lg.creDentials()

    When('Click in submit button', () => { 
   
       lg.subMit()   
 }) 
   
     Then('Confirm user is logged into PIM System', () => {
 
        const name = cy.get("[class='raul-header-user-handle d-none d-md-block m-0']").should('be.visible').should('have.text','Tanner T')

        })
    })