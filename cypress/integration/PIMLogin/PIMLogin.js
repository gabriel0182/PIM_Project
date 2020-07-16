///  <reference types="cypress"/>

import PimLogin from  '../PageObject/PimLogin'

const lg = new PimLogin ()


Given('Open PIM URL', () => {

  lg.visit()
  
  })
   
  When('I type the User and Password', () => { 

    
    lg.creDentials()

    When('Click in submit button', () => { 
   
        lg.submit()
     
 }) 
   
     Then('Confirm user is logged into PIM System', () => {
 
        const name = cy.get('.mr-4').should('be.visible').should('have.text','Welcome back, Tanner!')

        })
    })