const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = 3000;

const url = 'mongodb://localhost:27017';
const dbName = 'posts_db';
const client = new MongoClient(url);

app.use(bodyParser.json());
app.use('/posts', postRoutes(client, dbName));

client.connect(err => {
  if (err) throw err;
  console.log("Connected to MongoDB");

  app.listen(port, () => {
    console.log(`Post service running on port ${port}`);
  });
});
