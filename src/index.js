const express = require('express');

const app = express();
const APP_PORT = 3000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}.`);
});
