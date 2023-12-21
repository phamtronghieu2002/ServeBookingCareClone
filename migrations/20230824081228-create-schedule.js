'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      currentNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      timeType: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'allcodes',
          key: 'key_id'
        },
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
    await queryInterface.update('schedules');
  }
};