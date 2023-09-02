const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const routes = require('./routes.js');

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
