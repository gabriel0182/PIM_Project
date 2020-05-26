///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import status  from  '../PageObject/Appstatus';
import Activist  from  '../PageObject/Activist'

const app = new status ()
const ac = new Activist ()

   

Given('Login into the Site', () => {
  
  ac.activistform()
  ac.contactinfo()
  ac.Fileupload()
  ac.submit ()
 app.login();
      
    
  })
   
When('Find the Activist Application', () =>{ 


  
  app.activisttab()
 
  
}) 
       
     

  
    When('Change the Status up to Group Tutoring 3', () => { 
   
       app.Chage_Status()
    
}) 
  
    Then('Validating the Application Status', () => {

       app.assertion()
       });
    
    
      