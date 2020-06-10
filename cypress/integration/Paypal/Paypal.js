///  <reference types="cypress"/>

import Apayments from "../PageObject/Activistpayments";



const ap = new Apayments();

Given("Login as an Activist", () => {
  ap.Ativist_Login();
});

When("Go to Paymentes tab", () => {
  ap.Go_Payments();


When("Make the payment using paypal", () => {
    ap.Make_Payment();
});
})

  Then("Get the payment response", () => {
    cy.xpath("//span[@class='styles__Tag-bu28rp-1 hGfMMd']").should('have.text', 'Paid')
    });
    

  
