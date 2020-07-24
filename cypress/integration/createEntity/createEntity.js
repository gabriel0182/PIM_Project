///  <reference types="cypress"/>

import entity from "../PageObject/CreateEntity";

const ne = new entity();

Given("I select the Portfolio Management Option", () => {
ne.updateJson();
  ne.pimqa();
});

When("I Go to Entity Menu and crete a new one", () => {
  ne.newEntity();
});

Then("Confirm the Entity was created", () => {
  ne.assert();
});
