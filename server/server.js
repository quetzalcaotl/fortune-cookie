const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getRandomCookie } = require('../database/database.js');


const app = express();
const port = 3099;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/fortune', (_, response) => {
  getRandomCookie((error, data) => {
    if (error) return response.status(500).send(error);
    response.status(202).send(data);
  });
});

app.listen(port, () => {
  console.log(`The server is up and running on port ${port}`);
});
