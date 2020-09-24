///  <reference types="cypress"/>

import entity from "../PageObject/CreateEntity";

import ownerShip from "../PageObject/ownership";

const ent = new entity();
const own = new ownerShip();

Given("I select the Portfolio Management Option", () => {

    ent.pimqa();
  
});

When("I select the entity and go to Structure page", () => {

    own.structurePage();

});

When("I create the new ownership", () => {

  own.addowner()

});

then("Confirm the ownership was created", () => {
  own.confirmOwnership();
 own.updateInvestor()
  

});