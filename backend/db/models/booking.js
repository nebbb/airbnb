"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: DataTypes.INTEGER,
      placeId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );
  Booking.associate = function (models) {
    // associations can be defined here
  };
  return Booking;
};
