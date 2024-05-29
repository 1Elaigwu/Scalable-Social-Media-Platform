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
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'An error occurred while fetching notifications.' });
  } finally {
    await client.close();
  }
};

const createNotification = async (req, res) => {
  const client = new MongoClient(url);
  const { userId, message } = req.body;
  if (!userId || !message) {
    return res.status(400).json({ error: 'userId and message are required.' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('notifications').insertOne({
      userId: ObjectId(userId),
      message,
      createdAt: new Date()
    });
    res.status(201).json(result.ops[0]);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'An error occurred while creating the notification.' });
  } finally {
    await client.close();
  }
};

module.exports = {
  getNotifications,
  createNotification
};
