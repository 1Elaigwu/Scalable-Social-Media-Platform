const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

module.exports = (client, dbName) => {
    router.use((req, res, next) => {
        req.db = client.db(dbName);
        next();
    });

    router.post('/', postController.createPost);
    router.get('/', postController.getAllPosts);
    router.get('/:id', postController.getPostById);
    router.post('/:id/comments', postController.addComment);

    return router;
};

