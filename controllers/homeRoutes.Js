const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    title: "Homepage"
  });
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