///  <reference types="cypress"/>

class loginpage {
  Visit() {
    cy.visit("https://ej-qa-web.azurewebsites.net");
  }

  Fillusername(value) {
    const field = cy.get("#username");
    field.clear;
    field.type(value);
    return this;
  }

  Fillpassword(value) {
    const field = cy.get("#password");
    field.clear;
    field.type(value);
    return this;
  }

  Submit() {
    const button = cy.contains("Sign In");
    button.click();
  }
}

export default loginpage;
