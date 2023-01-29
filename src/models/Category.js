const Category = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });

  return CategoryTable;
};

module.exports = Category;
