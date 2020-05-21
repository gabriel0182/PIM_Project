///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import status  from  '../PageObject/Appstatus'

const app = new status ()

   

Given('Login into the Site', () => {

 app.login();
      
    
  })
   
When('Find the Activist Application', () =>{ 


  
  app.activisttab()
 
  
}) 
       
     

  
    When('Change the Status up to Group Tutoring 3', () => { 
   
       app.Chage_Status()
    
}) 
  
    Then('Validating the Application Status', () => {

       const asser= cy.get('.styles__TitleForm-he1avu-2',{ timeout: 10000 })
        asser.should('have.text', 'Thank You!')
       });
    
    
      