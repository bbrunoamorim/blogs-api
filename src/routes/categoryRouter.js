const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, categoryController.createCategory);

module.exports = router;
