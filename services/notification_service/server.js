const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'postgres',
  database: process.env.POSTGRES_DB || 'social_media_platform',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_PORT || 5432,
});

// MongoDB connection using mongoose
const mongoUrl = `mongodb://${process.env.MONGO_HOST || 'mongo'}:${process.env.MONGO_PORT || 27017}/social_media_platform`;

// Set the strictQuery option
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
