import DataBase  from  '../PageObject/DataBase'
import Coordinator from "../PageObject/Coordinator";

const db = new DataBase ()
const coor = new Coordinator ()

   

Given('Extract an user from the DataBase', () => {

  db.ConNection()
      
    
  })
   
When('Login into EJR', () =>{ 


 coor.admin_login()  
  
      
       
     

  
    When('Go to Accounts and select using the user from database', () => { 
   
       
    
}) 
  
    Then('The user was found', () => {

       const asser= cy.get('.styles__TitleForm-he1avu-2',{ timeout: 10000 })
        asser.should('have.text', 'Thank You!')
       });
    
    
      })