const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'users',
    underscored: true,
    timestamp: false,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPosts, {
      foreignKey: 'user_id',
      as: 'blog_posts'
    });
  };

  return UserTable;
};

module.exports = User;
