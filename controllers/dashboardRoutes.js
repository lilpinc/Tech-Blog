const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.get('/dashboard', withAuth, async (req, res) => {
    // find all posts with user id match
    try {
      const postData = await Post.findAll({
        include: [{ model: User, 
          where: {id: req.session.user_id},
          attributes: { exclude: ['password'] }, 
        }],
      });
      const posts = postData.map((post) => 
      post.get({plain: true})
);
      console.log(posts);
      res.render ('dashboard', {
          posts,
          loggedIn: req.session.loggedIn 
      })
      res.status(200).json(productData);
  } catch (error) {
      console.log(err);
      res.status(500).json(error);
  }
});

 module.exports = router;