// Switch to the 'social_media_platform' database
use social_media_platform;

// Create 'users' collection and index
db.createCollection('users');
db.users.createIndex({ user_id: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });

// Insert a sample user
db.users.insert({
    user_id: ObjectId(),
    username: "sample_user",
    email: "sample_user@example.com",
    password_hash: "sample_hash",
    created_at: ISODate()
});

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
