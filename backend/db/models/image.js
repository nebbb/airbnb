"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      placeId: DataTypes.INTEGER,
      imageUrl: DataTypes.TEXT,
    },
    {}
  );
  Image.associate = function (models) {
    Image.belongsTo(models.Place, { foreignKey: "placeId" });
  };
  return Image;
};
