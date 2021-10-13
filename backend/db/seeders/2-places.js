"use strict";

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
          name: "Dummy Place 1",
          description: "This is just a test place.",
          address: "232 Pop Lane",
          city: "Clarksburg",
          state: "Maryland",
          info: "2 beds",
          price: "$200",
          lat: "43.6",
          long: "-79.3",
          type: "Sandoon",
          picOne:
            "https://a0.muscache.com/im/pictures/miso/Hosting-43952787/original/646f253f-7042-42e6-9ae1-130791de256e.jpeg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/3b767a00-9753-4b7c-8413-a24e32f316b7.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/984f85a9-4b88-438b-be39-948b0e7fa992.jpg?im_w=720",
        },
        {
          userId: 1,
          name: "Dummy Place 2",
          address: "532 2p Lane",
          description: "This is just a test place.",
          city: "Compton",
          state: "New York",
          info: "21 beds",
          price: "$2600",
          lat: "42.6",
          long: "-77.3",
          type: "Home",
          picOne:
            "https://a0.muscache.com/im/pictures/miso/Hosting-43952787/original/646f253f-7042-42e6-9ae1-130791de256e.jpeg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/3b767a00-9753-4b7c-8413-a24e32f316b7.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/984f85a9-4b88-438b-be39-948b0e7fa992.jpg?im_w=720",
        },
        {
          userId: 1,
          name: "Dummy Place 3",
          address: "532 2p Lane",
          description: "This is just a test place.",
          city: "Compton",
          state: "New York",
          info: "21 beds",
          price: "$26",
          lat: "41.6",
          long: "-78.3",
          type: "Igloo",
          picOne:
            "https://a0.muscache.com/im/pictures/miso/Hosting-43952787/original/646f253f-7042-42e6-9ae1-130791de256e.jpeg?im_w=720",
          picTwo:
            "https://a0.muscache.com/im/pictures/3b767a00-9753-4b7c-8413-a24e32f316b7.jpg?im_w=720",
          picThree:
            "https://a0.muscache.com/im/pictures/984f85a9-4b88-438b-be39-948b0e7fa992.jpg?im_w=720",
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
