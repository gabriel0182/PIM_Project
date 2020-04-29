describe('Realizo un request', function(){
    it('Hago el request de la buqueda', function(){ 
    
    cy.visit('https://ej-dev-web.azurewebsites.net/?delay-new-todo=5000');
    cy.get('#username')
    .type('Isabel.Valencia9620')
    cy.get('#password')
    .type('M?gfxs5R');
    cy.contains('Sign In',{Timeout: 6000}).click()
    cy.contains('Welcome Isabel Cristina!').should('have.text', 'Welcome Isabel Cristina!')

})
})