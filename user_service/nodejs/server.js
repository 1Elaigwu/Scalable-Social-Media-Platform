const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'social_media_platform';
const client = new MongoClient(url);

app.use(bodyParser.json());

client.connect(err => {
  if (err) throw err;
  console.log("Connected to MongoDB");
  const db = client.db(dbName);

  app.use('/users', userRoutes(db));

  app.listen(port, () => {
    console.log(`User service running on port ${port}`);
  });
});
