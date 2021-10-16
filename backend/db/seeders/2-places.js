"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Places",
      [
        {
          userId: 1,
          name: "100 Acre Wood",
          description:
            "🌳100 Acre Wood is a custom built A-Frame cabin located on a wooded🌲 100 acre property in the heart of Loudoun County,in the charming Village of Lucketts,known for BEAUTIFUL WINERIES🍷,FABULOUS ANTIQUE SHOPS & FINE DINING &CRAFT BREWERIES🍻!The Potomac River, C&O Canal & Appalachian Trail & WO&D Trail & Harpers Ferry are all just a few miles away.This is the perfect spot to relax,unwind, recharge & enjoy the peaceful woods & wildlife.",
          address: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          info: "3 guests · 1 bedroom · 2 beds · 1 bath",
          price: "$285",
          lat: faker.address.latitude(),
          long: faker.address.longitude(),
          type: "Cabin",
          picOne:
            "https://a0.muscache.com/im/pictures/d1c76bbd-021f-42c4-8af0-62cf62073456.jpg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/c41f9bab-62cb-4cba-b2ab-296ab7c68e90.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/760fb215-fe1c-4698-8ec9-08a9985cd93d.jpg?im_w=720",
        },
        {
          userId: 1,
          name: "The Bunkhouse- Simple & Serene",
          address: faker.address.streetAddress(),
          description:
            "Enjoy the solace and beauty of the Blue Ridge Mountains with modern and local comforts. Retreat and explore this old 100acre farm- via foot- or float on the tiny pond in a kayak or SUP. Or venture out to Shenandoah National Park, the local coffee shops, eateries, wineries, and breweries. Whatever you choose the bunkhouse is stocked with roasted coffee, farm-fresh eggs, fresh-baked bread, teas and soaps from our incredible local homesteaders and artisans.",
          city: faker.address.city(),
          state: faker.address.state(),
          info: "2 guests · 1 bed · 1 bath",
          price: "$175",
          lat: faker.address.latitude(),
          long: faker.address.longitude(),
          type: "Home",
          picOne:
            "https://a0.muscache.com/im/pictures/22baa1a9-6a38-4627-b2fb-c763928bce1c.jpg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/60090699-4ddb-42ae-abba-9a8a7a607b08.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/fe23db8a-4bbb-4b61-b8cc-fd3f5f73bf74.jpg?im_w=720",
        },
        {
          userId: 1,
          name: "Colonial Era Spring House",
          address: faker.address.streetAddress(),
          description:
            "A unique and private mountain top colonial era spring house, with two springs flowing thru the basement. Originally the site of a tannery in the 1700s. Here you can relax, recharge, and rejuvenate. We celebrate all four seasons where you can enjoy Mother Nature's ever changing scenery at 1300' above sea level with fresh mountain air. Our area offers many things to do, or you may choose to stay in and do nothing at all.",
          city: faker.address.city(),
          state: faker.address.state(),
          info: "4 guests · 1 bedroom · 3 beds",
          price: "$122",
          lat: faker.address.latitude(),
          long: faker.address.longitude(),
          type: "Home",
          picOne:
            "https://a0.muscache.com/im/pictures/46d8bcb3-2be5-4394-8122-385c7695fd06.jpg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/e67875fb-f0e2-49ff-984e-f375116b3980.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/6c7c0816-d14a-4800-91ce-17ed420fcd01.jpg?im_w=720",
        },
        {
          userId: 1,
          name: "Glamping Skyview Tent In The Forest",
          address: faker.address.streetAddress(),
          description:
            "Unique tent 400sq ft located in 15 acres forest,surrounding by pond and over thousands of maple trees where is settled in nature and wild animals. When the morning comes, you can heard the birds, during the night U can watch the starts on the bed.",
          city: faker.address.city(),
          state: faker.address.state(),
          info: "4 guests · 1 bedroom · 1 bed · 1.5 baths",
          price: "$199",
          lat: faker.address.latitude(),
          long: faker.address.longitude(),
          type: "Dome",
          picOne:
            "https://a0.muscache.com/im/pictures/af61b9be-0a1d-4128-bc6b-6e6b119391a8.jpg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/74d9b82e-1b3b-4175-80e9-20a972e695bb.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/a9831a60-4cfa-4b2d-8a41-cfcdd9f1e2f0.jpg?im_w=720",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Places", null, {});
  },
};
