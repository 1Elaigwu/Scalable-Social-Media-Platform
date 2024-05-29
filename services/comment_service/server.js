require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Handle PostgreSQL connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

// MongoDB connection using mongoose
const mongoUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/social_media_platform`;

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
