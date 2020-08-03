Feature: Assign a group to an entity
 
  I want to test the assignation of a group to an Entity
  
  Scenario: Assign a group to an Entity
    Given I select the Investment Model Option in th Admin menu
    
    When I create the group

    And I create the Entity

    And I Assign the group to an Entity
      
    Then Confirm the Group was assigned