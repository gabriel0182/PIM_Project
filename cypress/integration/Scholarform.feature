Feature: Fill out Scholar form
 
  I want to test the Scholar Submit EJR application
  
  Scenario: Scholar Submit EJR application
    Given Open Scholar Form
    When I Fill out the form
         | FirstN  | LastN | Add | zip |  emailg | phoneg |  
       |  Andreas  | Graham | Street 89th | 33987 | gabriel.gomez@10pearls.com | 3456723498 |
    And I Click in subbmit button
    Then Confirmation message should be shown