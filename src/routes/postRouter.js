const express = require('express');

const router = express.Router();

const postController = require('../controllers/post.controller');
const { createPostMiddleware, updatePostMiddleware } = require('../middlewares/postMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, postController.getAll);
router.get('/:id', authMiddleware, postController.getById);
router.post('/', authMiddleware, createPostMiddleware, postController.createPost);
router.put('/:id', authMiddleware, updatePostMiddleware, postController.updatePost);

module.exports = router;
