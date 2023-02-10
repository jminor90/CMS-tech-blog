const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        }
      ]
    })
    /*
    Query all posts with user Data with sequelize 
    Post data will come in as an array of objects
    Each post object will have a user object
    User object property matches user model
    Post. findal all to include User Data....
    */

    const postDataSerialize = postData.map((post)=> post.get({ plain : true }))
    console.log(postDataSerialize)
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

  if (req.session.loggedIn){
    res.redirect('/Dashboard')
  }
  res.render('login', {
    title: "Login"
  });
})

router.get('/Dashboard', withAuth, async (req, res) => {
  
    //   const userData = await User.findByPk(req.session.id, {
    //   // attributes: {exclude:['password']}
    // })
    
    // const userDataSerialize = userData.get({plain:true})
    res.render('dashboard', {
    // userDataSerialize,
    title: "Dashboard",
    loggedIn: req.session.loggedIn 
  });
})
// need to figure out how to send req.session data to dashboard, so that posts can display "By: username"

// router.get('/Dashboard', withAuth, async (req, res) => {
//   try {

//     const userData = await User.findByPk(req.session.userName, {
//       attributes: {exclude:['password']}
//     })

//     const user = userData.get({plain:true})

//     res.render('dashboard', {
//       ...user,
//       title: "Dashboard",
//       loggedIn: req.session.loggedIn 
//     });
//   }
//   catch (err) {
//     res.status(500).json(err)
//   }


// })



router.get('/signup', async (req, res) => {
  res.render('signup', {
    title: "Sign Up"
  });
})

module.exports = router;