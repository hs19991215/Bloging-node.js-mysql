"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Node.js",
      },
      {
        name: "React Native",
      },
      {
        name: "React.js",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Flutter",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", {}, null);
  },
};
