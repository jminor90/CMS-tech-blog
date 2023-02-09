const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({})

    const postDataSerialize = postData.map((post)=> post.get({ plain : true }))

    res.render('home', {
      postDataSerialize,
      title: "Homepage",
      loggedIn: req.session.loggedIn 
    });
  }
  catch (err) {
    res.status(500).json(err)
  }

})

router.get('/login', async (req, res) => {
  res.render('login', {
    title: "Login"
  });
})

router.get('/Dashboard', async (req, res) => {
  res.render('dashboard', {
    title: "Dashboard"
  });
})

router.get('/signup', async (req, res) => {
  res.render('signup', {
    title: "Sign Up"
  });
})

module.exports = router;