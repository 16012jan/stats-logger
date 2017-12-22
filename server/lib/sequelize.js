const Sequelize = require('sequelize');
const config = require('../config');

const options = process.env.NODE_ENV === 'production' ?  config.get('production') : config.get('development');

const sequelize = new Sequelize(options.database, options.username, options.password, {
    host: config.get('hostname'),
    dialect: options.dialect,
    pool: options.pool
});

sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;