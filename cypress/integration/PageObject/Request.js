const md5 = require("md5");

class Request {

   
Get(){

   cy.request('GET','https://ej-qa-be.azurewebsites.net/api/Application/RetrieveApplication?lastName=Merk&phone=6745678983'
    )
    }

 
}

export default Request
