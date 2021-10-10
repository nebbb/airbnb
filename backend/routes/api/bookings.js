const express = require("express");
const asyncHandler = require("express-async-handler");
const { Booking } = require("../../db/models");

const router = express.Router();

// Get all bookings from a specific user
router.get(
  "/user/:userId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const allBookings = await Booking.findAll({
      where: {
        userId,
      },
    });
    return res.json({ allBookings });
  })
);

module.exports = router;
