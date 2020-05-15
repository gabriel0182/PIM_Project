
import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();

class DataBase {
  ConNection() {
    module.exports = (on, config) => {
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    }
    const db =cy.sqlServer(`SELECT * FROM [dbo].[AspNetUsers] WHERE USERNAME = 'JhonBolton' `,'test').should('eq', 'test');
    console.log(db)
  }
}

export default DataBase;
