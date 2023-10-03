const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// create relations between all routes
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete:'cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
})

Post.belongsTo(User, {
    foreignKey:'user_id',
    onDelete: 'cascade'
})

User.hasMany(Post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
})


module.export = {Comment, Post, User};