const Sequelize = require('sequelize');
const db = require('../_db');

const Movie = db.define('movie', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genre: {
			//⬇️DON'T UPDATE THE INPUT STRING ON ENUM WITHOUT ALSO CHANGING THE `allowedGenres` ARRAY ON ./src/components/AddMovie.js &AND& ./src/components/EditMovie.js❗️
        type: Sequelize.ENUM('Action/Adventure', 'Biography/Historical', 'Comedy', 'Documentary', 'Drama', 'Family/Animated', 'Fantasy', 'Horror/Thriller', 'Romance', 'Science Fiction', 'Western'),
			//⬆️DON'T UPDATE THE INPUT STRING ON ENUM WITHOUT ALSO CHANGING THE `allowedGenres` ARRAY ON ./src/components/AddMovie.js &AND& ./src/components/EditMovie.js❗️	
        allowNull: false,
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1888
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: .01
      }
  },
  inventory: {
    type: Sequelize.INTEGER,
		defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0
    }
	},
	imageUrl: {
		type: Sequelize.STRING,
	}
});

module.exports = Movie;
