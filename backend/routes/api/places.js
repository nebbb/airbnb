const express = require("express");
const asyncHandler = require("express-async-handler");
const { Place, User, Review, Booking, Favourite } = require("../../db/models");
const booking = require("../../db/models/booking");
const place = require("../../db/models/place");

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
      include: User,
    });
    return res.json({ allPlacesFromSpecificUser });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const newPlace = await Place.create(req.body);
    return res.json(newPlace);
  })
);

router.put(
  "/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    const theplace = await Place.findByPk(placeId, {
      include: User,
    });
    await theplace.update(req.body);
    return res.json(theplace);
  })
);

router.delete(
  "/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    const allreviews = await Review.findAll({
      where: {
        placeId,
      },
    });
    allreviews.forEach(async (review) => {
      await review.destroy();
    });
    const allbookings = await Booking.findAll({
      where: {
        placeId,
      },
    });
    allbookings.forEach(async (booking) => {
      await booking.destroy();
    });
    const allfavourites = await Favourite.findAll({
      where: {
        placeId,
      },
    });
    allfavourites.forEach(async (favourite) => {
      await favourite.destroy();
    });
    const save = await Place.findByPk(placeId);
    await save.destroy();
    return res.json(save);
  })
);

module.exports = router;
