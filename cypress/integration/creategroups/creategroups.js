///  <reference types="cypress"/>

import group from  '../PageObject/createGroup'

const gr = new group()


Given('I select the Portfolio Management Option', () => {

    gr.addNew()
 
  })
   
  When('I Go to Entity Groups Menu and crete a new one', () => { 

    gr.addGroup()
  
    

     
 }) 
   
     Then('Confirm the Group was created', () => {

      gr.assertion()
 
        
        })
    