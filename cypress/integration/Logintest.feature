Feature: Test EJR Login
 
  I want to test the Login in EJR application
  
  Scenario: Test login with a valid User 
    Given Open EJR URL
    When I Type in
        |    username  |  Password  |
        |    Isabel.Valencia9620  |  M?gfxs5R  |
    And I Click in sign in button
    Then User Name should be shown