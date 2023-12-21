'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DoctorInfors', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
        type: Sequelize.INTEGER,
      },
      doctorID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      priceID: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'allcodes',
          key: 'key_id'
        },
      },
      provinceID: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'allcodes',
          key: 'key_id'
        },
      },
      paymentID: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'allcodes',
          key: 'key_id'
        },
      },
      clinicID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'clinics',
          key: 'id'
        },
      },
      note: {
        allowNull: false,
        type: Sequelize.STRING,

      },
      count: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('DoctorInfors');
  }
};