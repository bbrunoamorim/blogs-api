const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const createPost = async (title, content, categoryIds, userId) => {
  const t = await sequelize.transaction();
  
  try {
    const createdPost = await BlogPost.create({ title, content, userId }, { transaction: t });

    await Promise.all(categoryIds.map(async (category) => PostCategory.create({
      postId: createdPost.id,
      categoryId: category,
    }, { transaction: t })));

    await t.commit();

    return createdPost;
  } catch (err) {
    console.log(err.message);
    await t.rollback();
  }
};

module.exports = {
  createPost,
};
