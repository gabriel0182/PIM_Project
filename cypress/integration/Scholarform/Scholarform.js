///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'
import Scholar  from  '../PageObject/Scholar'

const sc = new Scholar ()


Given('Open Scholar Form', () => {

  sc.go_scholar ()
  
  })
   
  When('I Fill out the form', (datatable) => { 

    
    sc.filltitle()
    datatable.hashes().forEach(Element => {
    sc.fillfisrtN(Element.FirstN)
    sc.fillLN(Element.LastN)
    sc.fillAdd(Element.Add)
    sc.fillState()
    sc.fillCity()
    sc.fillzip(Element.zip)
    sc.fillemailguardian(Element.emailg)
    sc.fillphoneguardian(Element.phoneg)
    sc.selectpreferred()
    sc.selectlegalguardian()
    sc.gradestudents()
    sc.scholarshiprecipient()
    sc.appliedbefore()
    sc.computerathome()
    sc.accesstheinternet()
    sc.youaccessinternet()
    sc.comfortable()
    sc.section4()
    sc.section5()
    sc.section6()
    sc.section7(Element.LastN)
  
   
    
  })
  })
   
  When('I Click in subbmit button', () => { 
   
   sc.apply ()
   
  }) 

  Then('Confirmation message should be shown', () => {

   cy.get('.styles__TitleForm-he1avu-2').should('have.text', 'Thank You!')
  });
   
  /*Then('I can add another item', () => {
    expect(cy.get('@addNewItemInput').should('be.empty');
  });*/