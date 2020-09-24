Feature: Create a new Entity
 
  I want to test the creation of an ownership
  
  Scenario: Add a New Ownership
    Given I select the Portfolio Management Option
    
    When I select the entity and go to Structure page

    And I create the new ownership
      
    Then Confirm the ownership was created