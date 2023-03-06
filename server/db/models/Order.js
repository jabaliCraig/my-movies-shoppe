const Sequelize = require('sequelize');
const db = require('../_db');

const Order = db.define('order', {
    // quantities: {
    //     type: Sequelize.INTEGER,
    //     validate: {
    //       min: 0
    //     }
    // },
    // total: {
    //     type: Sequelize.DECIMAL(10, 2), 
    //     validate:{
    //       min: 0
    //     }
    // },
    status: {
        type: Sequelize.ENUM('In Cart', 'Bought'),
        allowNull: false,
    }
});

module.exports = Order;