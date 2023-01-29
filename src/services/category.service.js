const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return { id: category.id, name };
};

module.exports = {
  createCategory,
};
