const express = require('express');

const app = express();
const APP_PORT = 3000;

app.set('view engine', 'hbs');

const appLogger = function (req, res, next) {
  console.log(`${new Date().toISOString()} -> ${req.method} ${req.url}`);
  next();
};
app.use(appLogger);

app.get('', (req, res) => {
  res.render('index');
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
