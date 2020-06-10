///  <reference types="cypress"/>

class loginpage {
  Visit() {
    cy.visit("https://ej-qa-web.azurewebsites.net");
  }

  Fillusername(value) {
    const userName = cy.get("#username")
    if(userName.should('be.visible')){
     userName.clear()
      userName.type(value);
    }
    else
   cy.wait($userName,4000).should('be.visible')
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
    button.wait(4000)
  }
}

export default loginpage;
