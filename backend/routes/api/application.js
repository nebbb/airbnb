const express = require("express");
const asyncHandler = require("express-async-handler");
const { Application } = require("../../db/models");

const router = express.Router();

// Get all bookings from a specific user
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const allApplications = await Application.findAll({});
    return res.json({ allBookings });
  })
);

module.exports = router;
