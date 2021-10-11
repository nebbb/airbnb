const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const placesRouter = require("./places.js");
const bookingsRouter = require("./bookings.js");
const reviewsRouter = require("./reviews.js");
const imagesRouter = require("./images.js");
const favouritesRouter = require("./favourites.js");
const applicationRouter = require("./application.js");
const searchRouter = require("./search");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/places", placesRouter);
router.use("/bookings", bookingsRouter);
router.use("/reviews", reviewsRouter);
router.use("/images", imagesRouter);
router.use("/favourites", favouritesRouter);
router.use("/applications", applicationRouter);
router.use("/search", searchRouter);

module.exports = router;
