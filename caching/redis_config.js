const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    console.log('Redis error: ', err);
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

module.exports = client;
