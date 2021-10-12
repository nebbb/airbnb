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
