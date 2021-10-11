const express = require("express");
const asyncHandler = require("express-async-handler");
const { Place } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

// Get all images from a specific place
router.get(
  "/:term",
  asyncHandler(async (req, res) => {
    const term = req.params.term;
    const searchResults = await Place.findAll({
      where: {
        name: {
          [Op.iLike]: `%${term}%`,
        },
      },
    });
    return res.json({ searchResults });
  })
);

module.exports = router;
