const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment_id: { type: Schema.Types.ObjectId, required: true },
    post_id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Comment = mongoose
