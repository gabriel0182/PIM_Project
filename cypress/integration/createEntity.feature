Feature: Create a new Entity
 
  I want to test the creation of a new Entity
  
  Scenario: Create a New Entity
    Given I select the Portfolio Management Option
    
    When I Go to Entity Menu and crete a new one
      
    Then Confirm the Entity was created