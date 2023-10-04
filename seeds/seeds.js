const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');

const userData = require('./user.js');
const postData = require ('./post.js');
const commentData = require ('./comment.js');



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    const posts = await Post.bulkCreate(postData);

    const comments = await Comment.bulkCreate(commentData);

    process.exit(0);
    };

    seedDatabase();

