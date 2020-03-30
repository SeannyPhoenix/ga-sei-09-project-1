// --------------------------- SERVER CONFIG ---------------------------- //

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------------------ DATABASE ------------------------------ //
const db = require('./models');

// ------------------------------- ROUTES ------------------------------- //
const routes = require('./routes');

// ----------------------------- MIDDLEWARE ----------------------------- //
// Serve Public Directory
app.use(express.static(`${__dirname}/public`));

// BodyParser - Make Request Data Avaialble on req.body
// We accept both Form Data and JSON
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

// Express Session
const SECRET = 'secret';
app.use(session({
  store: new MongoStore({
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/idbd'
  }),
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // Two weeks
  }
}));


// ----------------------------- ENDPOINTS ------------------------------ //

// VIEWS
app.get('/', (req, res) => {
  res.sendFile("/views/index.html", {
    root: __dirname,
  });
});

app.get('/auth', (req, res) => {
  res.sendFile("/views/auth.html", {
    root: __dirname,
  });
});

// API, AUTH
const API_VERSION = 'v1';
app.use(`/api/${API_VERSION}/`, routes.api);


// ---------------------------- START SERVER ---------------------------- //

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));