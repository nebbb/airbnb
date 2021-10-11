const express = require("express");
const asyncHandler = require("express-async-handler");
const { Favourite } = require("../../db/models");

const router = express.Router();

// Get all favourites from a specific user
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const allFavourites = await Favourite.findAll({
      where: {
        userId,
      },
    });
    return res.json({ allFavourites });
  })
);

module.exports = router;
