const express = require('express');

const router = express.Router();

const postController = require('../controllers/post.controller');
const createPostMiddleware = require('../middlewares/postMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, postController.getAll);
router.post('/', authMiddleware, createPostMiddleware, postController.createPost);

module.exports = router;
