const express = require("express");
const asyncHandler = require("express-async-handler");
const { Application, User } = require("../../db/models");
const { setTokenCookie } = require("../../utils/auth");

const router = express.Router();

// Get all bookings from a specific user
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const allApplications = await Application.findAll({});
    return res.json({ allBookings });
  })
);
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const application = await Application.create(req.body);
    // const user = await User.findByPk(1);
    // setTokenCookie(res, user);
    return res.json(application);
  })
);

module.exports = router;
