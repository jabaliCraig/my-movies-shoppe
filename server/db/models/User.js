const Sequelize = require('sequelize');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require('../_db');
require("dotenv").config();
const path = require("path");

const User = db.define('user', {
    fName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
				validate: {
					isEmail: true
				}
    },
    type: {
        type: Sequelize.ENUM('customer', 'Admin'),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
});


User.beforeCreate(async (user) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(user.password, saltRounds)
    user.password = hash;
});

User.byToken = async (token) => {
    try {
      // const payload = jwt.verify(token, process.env.JWT);
      // const user = await User.findByPk(payload.userId);

      const { userId } = jwt.verify(token, process.env.JWT);
      const user = await User.findByPk(userId);

      if (user) {
        return user;
      }
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    } catch (ex) {
      const error = Error("bad credentials");
      error.status = 401;
      throw error;
    }
  };

  User.authenticate = async ({ email, password }) => {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const authenticated = await bcrypt.compare(password, user.password);
      if (authenticated) {
        const token = jwt.sign({ userId: user.email }, process.env.JWT);
        return token;
      }
    }
    const error = Error("bad credentials");
    error.status = 401;
    throw error;
  };

module.exports = User;
