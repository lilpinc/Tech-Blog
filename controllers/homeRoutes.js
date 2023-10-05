const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and display with title and created at
        const postData = await Post.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'create_at'
            ],
        });

        const posts = postData.map((post) => 
        post.get({plain: true})
);
        res.render ('homepage', {
            posts,
            loggedIn: req.session.loggedIn 
        })
        res.status(200).json(productData);
    } catch (error) {
        console.log(err);
        res.status(500).json(error);
    }
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });


router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include:[
            {model: User}, {model: Comment}
        ]
        })
        const posts = postData.map((post) => 
        post.get({plain: true})
);
        res.render ('homepage', {
            posts,
            loggedIn: req.session.loggedIn 
        })
        res.status(200).json(productData);
    } catch (error) {
        console.log(err);
        res.status(500).json(error);
    }
});