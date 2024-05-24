const express = require('express');
const router = express.Router();

module.exports = (pool) => {
  router.get('/', async (req, res) => {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
  });

  router.post('/', async (req, res) => {
    const { username, email, password_hash } = req.body;
    await pool.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [username, email, password_hash]);
    res.status(201).send('User created');
  });

  return router;
};
