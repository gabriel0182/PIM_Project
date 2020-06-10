
///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'

const lp = new Loginpage ()

Given('Open EJR URL', () => {

  lp.Visit()
  
  });
   
  When('I Type in', (datatable) => { 

    
    datatable.hashes().forEach(Element => {
    
    lp.Fillusername(Element.username)
    lp.Fillpassword(Element.Password)
  })
  })
   
  When('I Click in sign in button', () => { 
   
   lp.Submit()
   
  }) 

  Then('User Name should be shown', () => {
const title = cy.get('.IDpBG').get('.bdhaoO')
if (title.should('have.text', 'Welcome Fernando!')){
  cy.log('Test Pass')
}
else
  Cypress.env('RETRIES', 2)
  });
   