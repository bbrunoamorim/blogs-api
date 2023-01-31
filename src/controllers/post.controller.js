const postService = require('../services/post.service');
const categoryService = require('../services/category.service');

const createPost = async (req, res) => {
  const { title, content, categoryIds, userId } = req.body;

  const categories = await categoryService.getAll();
  const categoriesId = categories.map(({ id }) => id);
  const check = categoryIds.some((id) => !categoriesId.includes(id));
  if (check) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const post = await postService.createPost(title, content, categoryIds, userId);
  return res.status(201).json(post);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAll();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await postService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const updatedPost = await postService.updatePost(id, title, content);

  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = await postService.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  if (post.userId !== userId) return res.status(401).json({ message: 'Unauthorized user' });

  await postService.deletePost(id);

  return res.status(204).end();
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
  deletePost,
};
