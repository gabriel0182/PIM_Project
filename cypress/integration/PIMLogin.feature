Feature: Login in PIM & PAM System
 
  I want to test the Login into PIM application
  
  Scenario: Login in PIM
    Given Open PIM URL
    
    When I type the User and Password
      
    And Click in submit button
    Then Confirm user is logged into PIM System