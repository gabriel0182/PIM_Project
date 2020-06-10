Feature: Test Activist Payments through Paypal
 
  I want to test the Activist Payments
  
  Scenario: Test Activist Payments 
    Given Login as an Activist
    When Go to Paymentes tab
    And Make the payment using paypal
    Then Get the payment response