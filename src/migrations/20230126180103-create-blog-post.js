'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      primaryKey: true,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  },
};
