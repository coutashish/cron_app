const Sequelize = require("sequelize");
const dataRoute = (".")

//Database  connection

const sequelize = new Sequelize('cron_app_data', 'sa', '1234', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            requestTimeout: 3000000,
            freezeTableName: true,
            enableArithAbort: true,
            validateBulkLoadParameters: true,
            multipleStatements: true
        }
    },
    retry: { max: 500, match: ['Connection lost - write ECONNRESET', 'Connection lost - read ECONNRESET', 'Failed to connect to localhost:1433 in 15000ms', 'Failed to connect to localhost:1433 - socket hang up', 'parent: ConnectionError: Failed to connect to localhost:1433 in 15000ms', 'Failed to connect to localhost:1433 in 15000ms'] },
    logging: false,
    pool: { max: 100, min: 0, acquire: 30000, idle: 3000000 },

});
sequelize.authenticate()
    .then((x) => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {sequelize};