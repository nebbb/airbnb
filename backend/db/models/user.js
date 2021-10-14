"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      profilePicture: {
        type: DataTypes.STRING,
        defaultValue:
          "https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "updatedAt"],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    const columnMapping3 = {
      foreignKey: "userId",
      through: "Favourite",
      otherKey: "placeId",
    };
    const columnMapping = {
      foreignKey: "userId",
      through: "Booking",
      otherKey: "placeId",
    };
    const columnMapping2 = {
      foreignKey: "userId",
      through: "Review",
      otherKey: "placeId",
    };

    // User.belongsToMany(models.Place, columnMapping3);
    // User.belongsToMany(models.Place, columnMapping2);
    // User.belongsToMany(models.Place, columnMapping);
    User.hasMany(models.Place, { foreignKey: "userId" });
    User.hasMany(models.Review, { foreignKey: "userId" });
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, profilePicture } = this; // context will be the User instance
    return { id, username, email, profilePicture };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };
  return User;
};
