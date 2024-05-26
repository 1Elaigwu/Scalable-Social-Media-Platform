const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'social_media_platform';

const getComments = async (req, res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const comments = await db.collection('comments').find().toArray();
    res.json(comments);
  } finally {
    client.close();
  }
};

const createComment = async (req, res) => {
  const client = new MongoClient(url);
  const { postId, userId, content } = req.body;
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection('comments').insertOne({
      postId: ObjectId(postId),
      userId: ObjectId(userId),
      content,
      createdAt: new Date()
    });
    res.status(201).json(result.ops[0]);
  } finally {
    client.close();
  }
};

module.exports = {
  getComments,
  createComment
};
