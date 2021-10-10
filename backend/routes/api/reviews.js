const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review } = require("../../db/models");

const router = express.Router();

// Get all reviews for a specific place
router.get(
  "/reviews/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    const allReviews = await Review.findAll({
      where: {
        placeId,
      },
    });
    return res.json({ allReviews });
  })
);

// Get all reviews for a specific user
router.get(
  "/reviews/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const allReviews = await Review.findAll({
      where: {
        userId,
      },
    });
    return res.json({ allReviews });
  })
);

module.exports = router;
