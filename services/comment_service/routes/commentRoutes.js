const express = require('express');
const router = express.Router();
const commentController = require('../../nodejs/controllers/commentController');

router.get('/', commentController.getComments);
router.post('/', commentController.createComment);

module.exports = router;
