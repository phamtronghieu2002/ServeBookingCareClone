'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'allcodes',
        key: 'key_id'
      },
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phonenumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roleID: {
      type: Sequelize.STRING,
      allowNull: false, 
      references: {
        model: 'allcodes',
        key: 'key_id'
      },
    },
    positionID: {
      type: Sequelize.STRING,
      allowNull: false, 
      references: {
        model: 'allcodes',
        key: 'key_id'
      },
    },
    image: {
      type: Sequelize.BLOB('long'),
      allowNull: true
    }
,
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
    await queryInterface.dropTable('Users');
  }
};