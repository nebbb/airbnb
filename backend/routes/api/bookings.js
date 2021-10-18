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
    return res.json(allBookings);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const booking = await Booking.create(req.body);
    return res.json(booking);
  })
);

router.delete(
  "/:bookingId",
  asyncHandler(async (req, res) => {
    const bookid = req.params.bookingId;
    const thebook = await Booking.findByPk(bookid);
    await thebook.destroy();
    return res.json(bookid);
  })
);

module.exports = router;
