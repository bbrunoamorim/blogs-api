const { Sequelize, Op } = require('sequelize');
const { BlogPost, PostCategory, Category, User } = require('../models');
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
    await t.rollback();
  }
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const updatePost = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return updatedPost;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const searchPost = async (query) => {
  const result = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: query } },
        { content: { [Op.substring]: query } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return result;
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
  searchPost,
};
