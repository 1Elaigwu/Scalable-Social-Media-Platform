const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'social_media_platform';

const getNotifications = async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const notifications = await db.collection('notifications').find().toArray();
    res.json(notifications);
  } finally {
    client.close();
  }
};

const createNotification = async (req, res) => {
  const client = new MongoClient(url);
  const { userId, message } = req.body;
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('notifications').insertOne({
      userId: ObjectId(userId),
      message,
      createdAt: new Date()
    });
    res.status(201).json(result.ops[0]);
  } finally {
    client.close();
  }
};

module.exports = {
  getNotifications,
  createNotification
};
