'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Markdowns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contentHTML: {
        type: Sequelize.TEXT('long')
      },
      contentMarkdown: {
        type: Sequelize.TEXT('long')
      },
      desc: {
        type: Sequelize.TEXT('long')
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      clinicId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'clinics', // Thay thế bằng tên thực sự của bảng Allcodes
          key: 'id'
        }
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'specialists', // Thay thế bằng tên thực sự của bảng Allcodes
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
    await queryInterface.dropTable('Markdowns');
  }
};