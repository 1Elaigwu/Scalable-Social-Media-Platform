const express = require('express');
const router = express.Router();

module.exports = (client, dbName) => {
  router.get('/', async (req, res) => {
    const db = client.db(dbName);
    const posts = await db.collection('posts').find().toArray();
    res.json(posts);
  });

  router.post('/', async (req, res) => {
    const db = client.db(dbName);
    await db.collection('posts').insertOne(req.body);
    res.status(201).send('Post created');
  });

  return router;
};
