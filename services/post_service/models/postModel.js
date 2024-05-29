const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment_id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const postSchema = new Schema({
    post_id: { type: Schema.Types.ObjectId, required: true },
    user_id: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    media: { type: [String] },
    likes: { type: Number, default: 0 },
    comments: [commentSchema],
    created_at: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
