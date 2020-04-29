
///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'

const lp = new Loginpage ()

Given('Open EJR URL', () => {

  lp.Visit()
  
  });
   
  When('I Type in', (datatable) => { 

    
    datatable.hashes().forEach(Element => {
    
    lp.Fillusername(Element.username)
    lp.Fillpassword(Element.Password)
  })
  })
   
  When('I Click in sign in button', () => { 
   
   lp.Submit()
   
  }) 

  Then('User Name should be shown', () => {

   cy.contains('Welcome Isabel Cristina!').should('have.text', 'Welcome Isabel Cristina!')
  });
   
  /*Then('I can add another item', () => {
    expect(cy.get('@addNewItemInput').should('be.empty');
  });*/