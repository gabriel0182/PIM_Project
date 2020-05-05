///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'
import Scholar  from  '../PageObject/Scholar'
import Activist  from  '../PageObject/Activist'

const ac = new Activist ()

   

Given('Open Activist Form', () => {

  ac.activistform()
      
    
  })
   
When('I Fill out the form', () =>{ 


  
  ac.contactinfo()
  ac.Fileupload()
  
  
  
      
       
     

  
    When('I Click in subbmit button', () => { 
   
       ac.submit ()
    
}) 
  
    Then('Confirmation message should be shown', () => {

      //cy.get('#foo')
  //.should('have.text', 'something')

        cy.contains('Thank You!').should('have.text', 'Thank You!')
       });
    
    
      })