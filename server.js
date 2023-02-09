const path = require('path');
const express = require('express');

const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();
const helpers = require('./utils/helpers');
const routes = require('./controllers'); 
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({
  helpers
});

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1800000, // 30 Minutes
    httpOnly: true, 
    secure: false, //may need to change to true before deployment
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});