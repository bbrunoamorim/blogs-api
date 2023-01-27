const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const { createUserMiddleware } = require('../middlewares/userMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, userController.getAll);
router.post('/', createUserMiddleware, userController.createUser);

module.exports = router;
