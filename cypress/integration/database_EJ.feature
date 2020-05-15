Feature: Read data from EJR DataBase
 
  I want to read data from thhe EJR DataBase
  
  Scenario: Make the database conection
    Given Extract an user from the DataBase
    
    When Login into EJR

    And Go to Accounts and select using the user from database      
    Then The user was found