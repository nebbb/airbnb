const express = require("express");
const asyncHandler = require("express-async-handler");
const { Place, User, Review } = require("../../db/models");

const router = express.Router();

// Get all listed places
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const allPlaces = await Place.findAll({
      include: [User],
    });
    return res.json({ allPlaces });
  })
);

// Get specific place
router.get(
  "/place/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    const specificPlace = await Place.findByPk(Number(placeId));
    return res.json({ specificPlace });
  })
);

// Get all listed places from a specific user
router.get(
  "/user/:userId",
  asyncHandler(async (req, res) => {
    const specificUser = req.params.userId;
    const allPlacesFromSpecificUser = await Place.findAll({
      where: {
        userId: specificUser,
      },
    });
    return res.json({ allPlacesFromSpecificUser });
  })
);

module.exports = router;
