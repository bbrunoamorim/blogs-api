const express = require('express');
const { loginMiddleware } = require('./middlewares');
const { userController } = require('./controller');

// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', loginMiddleware, userController.userLogin);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
