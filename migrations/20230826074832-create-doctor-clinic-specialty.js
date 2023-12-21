'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctor_clinic_specialties', {

      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Users', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      clinicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Clinics', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Specialists', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
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
    await queryInterface.dropTable('doctor_clinic_specialties');
  }
};