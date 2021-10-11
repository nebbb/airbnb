"use strict";
module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define(
    "Application",
    {
      userId: DataTypes.INTEGER,
      reason: DataTypes.TEXT,
      type: DataTypes.BOOLEAN,
    },
    {}
  );
  Application.associate = function (models) {
    // associations can be defined here
    Application.belongsTo(models.User, { foreignKey: "userid" });
  };
  return Application;
};
