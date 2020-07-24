Feature: Create a new Group
 
  I want to test the creation of a new Group
  
  Scenario: Create a New Group
    Given I select the Portfolio Management Option
    
    When I Go to Entity Groups Menu and crete a new one
      
    Then Confirm the Group was created