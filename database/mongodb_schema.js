// Switch to the 'social_media_platform' database
use social_media_platform;

// Create 'posts' collection and index
db.createCollection('posts');
db.posts.createIndex({ post_id: 1 }, { unique: true });
db.posts.createIndex({ user_id: 1 });

// Insert a sample post
db.posts.insert({
    post_id: ObjectId(),
    user_id: db.users.findOne({username: "sample_user"})._id,  // Match the user_id from the 'users' collection
    content: "This is a sample post",
    media: ["image1.jpg", "video1.mp4"],
    likes: 100,
    comments: [
        { comment_id: ObjectId(), user_id: ObjectId(), content: "Nice post!", created_at: ISODate() }
    ],
    created_at: ISODate()
});

// Create 'comments' collection and index
db.createCollection('comments');
db.comments.createIndex({ comment_id: 1 }, { unique: true });

// Sample comment document
db.comments.insert({
    comment_id: ObjectId(),
    post_id: ObjectId(),  // Reference to the post
    user_id: ObjectId(),  // Reference to the user
    content: "This is a comment",
    created_at: ISODate()
});

// Create 'notifications' collection and index
db.createCollection('notifications');
db.notifications.createIndex({ notification_id: 1 }, { unique: true });

// Sample notification document
db.notifications.insert({
    notification_id: ObjectId(),
    user_id: ObjectId(),  // Reference to the user
    message: "This is a sample notification",
    created_at: ISODate()
});