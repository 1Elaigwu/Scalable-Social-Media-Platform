const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users_db',
  password: 'password',
  port: 5432
});

app.use(bodyParser.json());
app.use('/users', userRoutes(pool));

app.listen(port, () => {
  console.log(`User service running on port ${port}`);
});
