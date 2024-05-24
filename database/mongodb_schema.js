db.posts.insert({
    post_id: ObjectId(),
    user_id: ObjectId(),
    content: "This is a sample post",
    media: ["image1.jpg", "video1.mp4"],
    likes: 100,
    comments: [
        { comment_id: ObjectId(), user_id: ObjectId(), content: "Nice post!", created_at: ISODate() }
    ],
    created_at: ISODate()
});
