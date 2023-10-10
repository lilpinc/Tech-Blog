const { Comment } = require('../models/Comment');

const commentData =
[
    {
        comment_text: "This is so cool!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Best one..",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: ":)",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "I love this!",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Nice.",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Love it.",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "Crazy!",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "I would like to know more.",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "I will try to remember this.",
        user_id: 2,
        post_id: 1,
        
    }
]
const comments = () => Comment.bulkCreate(commentData);

module.exports = comments;