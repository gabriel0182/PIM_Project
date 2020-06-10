Feature: Test EJR Login
 
  I want to test the Login in EJR application
  
  Scenario: Test login with a valid User 
    Given Open EJR URL
    When I Type in
        |    username  |  Password  |
        |    FernandoWick  |  Test123*  |
    And I Click in sign in button
    Then User Name should be shown