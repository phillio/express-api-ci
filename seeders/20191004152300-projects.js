'use strict';

const faker = require('faker');

const projects = [...Array(500)].map((project) => (
  {
    title: faker.commerce.productName(),
    imageUrl: faker.image.business(),
    description: faker.lorem.paragraph(),
    githubUrl: faker.internet.url(),
    deployedUrl: faker.internet.url(),
    userId: Math.floor(Math.random() * 100) + 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', projects, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
