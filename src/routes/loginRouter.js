const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth.controller');
const loginMiddleware = require('../middlewares/loginMiddleware');

router.post('/', loginMiddleware, authController.userLogin);

module.exports = router;
