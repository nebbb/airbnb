const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review, Place } = require("../../db/models");

const router = express.Router();

// Get all reviews for a specific place
router.get(
  "/place/:placeId",
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
  "/user/:userId",
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

// Get average reviews for a place
router.get(
  "/rating/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    let oneStar = 0;
    let twoStar = 0;
    let threeStar = 0;
    let fourStar = 0;
    let fiveStar = 0;
    let avgRating = 0;
    const allReviews = await Review.findAll({
      where: {
        placeId,
      },
    });
    allReviews.forEach((review) => {
      switch (review.rating) {
        case "1":
          oneStar++;
          break;
        case "2":
          twoStar++;
          break;
        case "3":
          threeStar++;
          break;
        case "4":
          fourStar++;
          break;
        case "5":
          fiveStar++;
          break;
        default:
          return;
      }
    });
    avgRating =
      (1 * oneStar +
        2 * twoStar +
        3 * threeStar +
        4 * fourStar +
        5 * fiveStar) /
      allReviews.length;

    res.json({
      avgRating: avgRating.toFixed(1),
      length: allReviews.length,
      placeId,
    });
  })
);

module.exports = router;
