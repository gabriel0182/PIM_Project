///  <reference types="cypress"/>

import assigngroup from "../PageObject/Assigngroup";

const assign = new assigngroup();

Given("I select the Investment Model Option in th Admin menu", () => {
  assign.selectAdmin();
});

When("I create the group", () => {
assign.createGroup()
});

When("I create the Entity", () => {

assign.addEntity()
});

When("I Assign the group to an Entity", () => {

  assign.assignEntityGroup()

});

Then("Confirm the Group was assigned", () => {
assign.assert()

});
