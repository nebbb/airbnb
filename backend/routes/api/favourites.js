const express = require("express");
const asyncHandler = require("express-async-handler");
const { Favourite } = require("../../db/models");

const router = express.Router();

// Get all favourites from a specific user
// router.get(
//   "/fav/:userId",
//   asyncHandler(async (req, res) => {
//     const userId = req.params.userId;
//     const allFavourites = await Favourite.findAll({
//       where: {
//         userId,
//       },
//     });
//     return res.json(allFavourites);
//   })
// );

// Get all favourites
router.get(
  "/all",
  asyncHandler(async (req, res) => {
    const allFavourites = await Favourite.findAll();
    return res.json(allFavourites);
  })
);

// Get all favourites
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const favourite = await Favourite.create(req.body);
    const allFavs = await Favourite.findAll();
    return res.json(allFavs);
  })
);

// Get all favourites
// router.delete(
//   "/:favId",
//   asyncHandler(async (req, res) => {
//     const favId = req.params.favId;
//     const theFav = await Favourite.findByPk(favId);
//     await theFav.destroy();
//     const allFavs = await Favourite.findAll();
//     return res.json(allFavs);
//   })
// );

router.delete(
  "/:userId/:placeId",
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const placeId = req.params.placeId;
    const theFav = await Favourite.findOne({
      where: {
        userId,
        placeId,
      },
    });
    await theFav.destroy();
    const allFavs = await Favourite.findAll();
    return res.json(allFavs);
  })
);

module.exports = router;
