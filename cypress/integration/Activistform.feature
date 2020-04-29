Feature: Fill out Activist form
 
  I want to test the Activist Submit EJR application
  
  Scenario: Activist Submit EJR application
    Given Open Activist Form
    
    When I Fill out the form
      
    And I Click in subbmit button
    Then Confirmation message should be shown