Feature: Create a Coordinator account
 
  I want to test the creation of a coordinator account
  
  Scenario: Admin login in to the system
    Given Open the account page
    
    When I Fill out the form

    And I Click in save button      
    Then Confirmation message should be shown