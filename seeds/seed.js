const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');

const users = require('./user.js');
const posts = require ('./post.js');
const comments = require ('./comment.js');




const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await users();
    await posts();
    await comments();
    // const users = await User.bulkCreate(userData, {
    //     individualHooks: true,
    //     returning: true,
    //   });

    // const posts = await Post.bulkCreate(postData);

    // const comments = await Comment.bulkCreate(commentData);

    process.exit(0);
    };

    seedDatabase();

