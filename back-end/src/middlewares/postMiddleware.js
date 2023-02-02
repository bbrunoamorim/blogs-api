const createPostMiddleware = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};

const updatePostMiddleware = (req, res, next) => {
  const { userId, title, content } = req.body;
  const { id } = req.params;

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (Number(userId) !== Number(id)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  return next();
};

module.exports = {
  createPostMiddleware,
  updatePostMiddleware,
};
