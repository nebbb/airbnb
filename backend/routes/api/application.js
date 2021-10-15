const express = require("express");
const asyncHandler = require("express-async-handler");
const { Application, User } = require("../../db/models");
const { setTokenCookie } = require("../../utils/auth");

const router = express.Router();

// Get all bookings from a specific user
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const allApplications = await Application.findAll();
    return res.json(allApplications);
  })
);
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const application = await Application.create(req.body);
    return res.json(application);
  })
);

// accept a user
router.put(
  "/:userId",
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const userId = req.params.userId;

    const applicant = await User.findByPk(userId);
    await applicant.update({
      accountType: 2,
    });
    await Application.destroy({
      where: {
        id,
      },
    });
    res.json({ applicant });
  })
);

module.exports = router;
