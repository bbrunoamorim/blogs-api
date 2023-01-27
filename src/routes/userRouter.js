const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const { createUserMiddleware } = require('../middlewares/userMiddleware');

router.post('/', createUserMiddleware, userController.createUser);

module.exports = router;
