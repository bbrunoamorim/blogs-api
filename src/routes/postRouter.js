const express = require('express');

const router = express.Router();

const postController = require('../controllers/post.controller');
const { createPostMiddleware, updatePostMiddleware } = require('../middlewares/postMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/search', authMiddleware, postController.searchPost);
router.get('/', authMiddleware, postController.getAll);
router.get('/:id', authMiddleware, postController.getById);
router.post('/', authMiddleware, createPostMiddleware, postController.createPost);
router.put('/:id', authMiddleware, updatePostMiddleware, postController.updatePost);
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
