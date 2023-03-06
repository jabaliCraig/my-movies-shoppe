const Sequelize = require('sequelize');
const db = require('../_db');

const Personnel = db.define('personnel', {
	fName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	type: {
		type: Sequelize.ENUM('Actor', 'Director'),
		allowNull: false,
	},
	imageUrl: {
		type: Sequelize.STRING,
		// validate:{
		// 	isUrl: true
		// }
	},
	details: {
		type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: 'No bio yet.'
	}
});

module.exports = Personnel;