'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('allcodes', {


      type_id: {
        type: Sequelize.STRING,
        allowNull: false,
  
      },
      key_id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      valueEN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      valueVN: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.update('allcodes');
  }
};