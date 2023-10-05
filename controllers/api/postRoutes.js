const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


router.post('/',async (req, res) => {
    // create a new category
    try {
      const postData = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
        });

      res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  
  });
  

  router.put('/:id', withAuth, async (req, res) => {
    try {
    const postData = await Post.update({
            title: req.body.title,
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        });
        const posts = postData.map((post) => 
        post.get({plain: true})
  );
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
                return;
        }
        res.render ('posts', {
            posts,
            loggedIn: req.session.loggedIn 
        })
        res.status(200).json(productData);
    } catch (error) {
        console.log(err);
        res.status(500).json(error);
    }
  });



router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
        where: {
            id: req.params.id
        }
    })
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
                return;
          }
          res.status(200).json(categoryData);
        } catch (error) {
          res.status(500).json(error);
        }
      });

module.exports = router;