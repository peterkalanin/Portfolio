const express = require('express');

const app = express();
const APP_PORT = 3000;

const appLogger = function (req, res, next) {
  console.log(`${new Date().toISOString()} -> ${req.method} ${req.url}`);
  next();
};

app.use(appLogger);

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}.`);
});
