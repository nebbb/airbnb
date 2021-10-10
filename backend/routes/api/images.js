const express = require("express");
const asyncHandler = require("express-async-handler");
const { Image } = require("../../db/models");

const router = express.Router();

// Get all images from a specific place
router.get(
  "/images/:placeId",
  asyncHandler(async (req, res) => {
    const placeId = req.params.placeId;
    const allImages = await Image.findAll({
      where: {
        placeId,
      },
    });
    return res.json({ allImages });
  })
);

module.exports = router;
