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

       const asser= cy.get('.styles__TitleForm-he1avu-2',{ timeout: 10000 })
        asser.should('have.text', 'Thank You!')
       });
    
    
      })