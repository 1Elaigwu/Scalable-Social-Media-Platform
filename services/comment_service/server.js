const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(express.json()); // Use built-in middleware for parsing JSON

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'social_media_platform',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_PORT || 5432,
});

// Handle PostgreSQL connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

// MongoDB connection using mongoose
const mongoUrl = `mongodb://${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || 27017}/social_media_platform`;

mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB using mongoose');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});

app.use('/comments', commentRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Comments service running on port ${port}`);
});
