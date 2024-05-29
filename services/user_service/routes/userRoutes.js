const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

module.exports = (db) => {
    router.use((req, res, next) => {
        req.db = db;
        next();
    });

    router.post('/register', userController.registerUser);
    router.post('/login', userController.loginUser);

    return router;
};

