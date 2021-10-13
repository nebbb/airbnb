"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: DataTypes.INTEGER,
      placeId: DataTypes.INTEGER,
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
