const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');

router.use(bodyParser.json());
const API_VERSION = 'v1';

// GET Book Index
// /api/v1/books
router.get('/books', (req, res) =>
{
  db.Book.find(
  {}, (err, books) =>
  {
    if (err)
    {
      console.log(`Book Index Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(books);
  });
});

// GET Book Show
router.get('/books/:id', (req, res) =>
{
  db.Book.findById(req.params.id, (err, book) =>
  {
    if (err)
    {
      console.log(`Book Show Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(book);
  });
});


// GET User Index
router.get('/users', (req, res) =>
{
  db.User.find(
  {}, (err, users) =>
  {
    if (err)
    {
      console.log(`User Index Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(users);
  });
});

// GET User Show
router.get('/user/:id', (req, res) =>
{
  db.User.findById(req.params.id, (err, user) =>
  {
    if (err)
    {
      console.log(`User Show error:`, err);
      res.sendStatus(500);
      return;
    }
    res.json(user);
  });
});

// POST User Create
router.post('/user', (req, res) =>
{
  db.User.create(req.body, (err, newUser) =>
  {
    if (err)
    {
      console.log(`Create User Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(newUser);
  });
});

// PUT User Update
router.put('/user/:id', (req, res) =>
{
  db.User.findByIdAndUpdate(req.params.id, req.body,
  {
    new: true
  }, (err, updatedUser) =>
  {
    if (err)
    {
      console.log(`Update User Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(updatedUser);
  });
});

// GET Raiting Index by User
router.get('/user/:id/ratings', (req, res) =>
{
  db.User.findById(req.params.id, (err, foundUser) =>
  {
    if (err)
    {
      console.log(`Get User Ratings Error:`, err);
      res.sendStatus(500);
      return;
    }
    res.json(foundUser.ratings);
  });
});

// GET Raiting Index by User
router.get('/books/:id/ratings', (req, res) =>
{
  db.Book.findById(req.params.id, (err, foundBook) =>
  {
    if (err)
    {
      console.log(`Get Book Ratings Error:`, err);
      res.sendStatus(500);
      return;
    }
    res.json(foundBook.ratings);
  });
});

// POST Rating Create
router.post('/rating', newRating);

async function newRating(req, res)
{
  try
  {
    let newRating = db.Rating.create(req.body);
    res.json(newRating);
    // let user = await db.User.findById(newRating.user);
    // user.ratings.push(newRating._id);
    // await user.save();
    // res.json(newRating);
  }
  catch (err)
  {
    console.log(`Create Book Ratings Error:`, err);
    res.sendStatus(500);
    return;
  }
}


// PUT Rating Update

// DELETE Rating Destroy

module.exports = router;