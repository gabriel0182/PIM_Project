///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'
import Scholar  from  '../PageObject/Scholar'
import Activist  from  '../PageObject/Activist'

describe('Activist form', function () {

    beforeEach(function() {
        cy.fixture("example.json").then(function(data) {
        this.data = data
    
        })


})

const ac = new Activist ()

   

Given('Open Activist Form', () => {

  ac.activistform()
      
    
  })
   
  When('I Fill out the form', function(data) { 


    

    it('Activist test', function () {

            ac.contactinfo().type(this.data.name)

       

    })    

  })

    When('I Click in subbmit button', () => { 
   
       ac.submit ()
    
}) 
  
    Then('Confirmation message should be shown', () => {

        cy.contains('Thank You!').should('have.text', 'Thank You!')
       });
    
    })