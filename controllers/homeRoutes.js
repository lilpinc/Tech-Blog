const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and display with title and created at
        const postData = await Post.findAll({
            include: [{model: User}],
            // attributes: [
            //     'id',
            //     'title',
            //     'content',
            //     'create_at'
            // ],
            // order: [
            //     ['created_at', 'DESC']
            // ],
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
        console.log(error)
        res.status(500).json(error);
    }
});

router.get("/login", async (req, res) => {
    try {
    res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
  router.get("/signup", (req, res) => {
    try {
        res.render('signup');
        } catch (err) {
            res.status(500).json(err);
        }
      });
      

router.get('/post/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include:[
            {model: User}, {model: Comment}
        ]
        });
        const posts = postData.map((post) => 
        post.get({plain: true})
);
        res.render ('homepage', posts);
        
    } catch (error) {
        console.log(err);
        res.status(500).json(error);
    }
});


module.exports = router;