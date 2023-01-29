const BlogPost = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    }
  );

    BlogPostTable.associate = (models) => {
      BlogPostTable.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'user_id',
      });
    };

  return BlogPostTable;
};

module.exports = BlogPost;
