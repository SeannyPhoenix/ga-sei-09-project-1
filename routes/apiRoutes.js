const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models');

router.use(bodyParser.json());
const API_VERSION = 'v1';

// GET Book Index
// /api/v1/books
router.get('/books', getBooks);
async function getBooks(req, res)
{
  try
  {
    let books = await db.Book.find(
    {}).populate('ratings');
    res.json(books);
  }

  catch (err)
  {
    console.log(`Book Index Error`, err);
    res.sendStatus(500);
    return;
  }
}


// GET Book Show
router.get('/books/:id', showBook)
async function showBook(req, res)
{
  try
  {
    let book = await db.Book.findById(req.params.id).populate('ratings');
    res.json(book);
  }
  catch (err)
  {
    console.log(`Book Show Error`, err);
    res.sendStatus(500);
    return;
  }
}


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
router.get('/users/:id', (req, res) =>
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
router.post('/users', (req, res) =>
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
router.put('/users/:id', (req, res) =>
{
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
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

// GET Rating Index by User
router.get('/users/:id/ratings', (req, res) =>
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

// GET Rating Index by User
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

// GET Rating Index
router.get('/ratings', (req, res) =>
{
  db.Rating.find(
  {}, (err, ratings) =>
  {
    if (err)
    {
      console.log(`Index Rating Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(ratings);
  })
})

// GET Rating Show
router.get('/ratings/:id', (req, res) =>
{
  db.Rating.findById(req.params.id, (err, rating) =>
  {
    if (err)
    {
      console.log(`Show Rating Error`, err);
      res.sendStatus(500);
      return;
    }
    res.json(rating);
  })
})

// POST Rating Create
router.post('/ratings', newRating);
async function newRating(req, res)
{
  try
  {
    let newRating = await db.Rating.create(req.body);

    let user = await db.User.findById(newRating.user);
    user.ratings.push(newRating._id);
    await user.save();

    let book = await db.Book.findById(newRating.book);
    book.ratings.push(newRating._id);
    await book.save();

    res.json(newRating);
  }
  catch (err)
  {
    console.log(`Create Book Ratings Error:`, err);
    res.sendStatus(500);
    return;
  }
}

// PUT Rating Update
router.put('/ratings/:id', updateRating);
async function updateRating(req, res)
{
  try
  {
    let updatedRating = await db.Rating.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    res.json(updatedRating);
  }
  catch (err)
  {
    console.log(`Update Book Ratings Error:`, err);
    res.sendStatus(500);
    return;
  }
}

// DELETE Rating Destroy
router.delete('/ratings/:id', deleteRating);
async function deleteRating(req, res)
{
  try
  {
    let deletedRating =
      await db.Rating.findByIdAndDelete(req.params.id);
    console.log(deletedRating);

    let user = await db.User.findById(deletedRating.user);
    user.ratings = user.ratings.filter(id =>
      String(id) !== String(deletedRating._id)
    );
    await user.save();

    let book = await db.Book.findById(deletedRating.book);
    book.ratings = book.ratings.filter(id =>
      String(id) !== String(deletedRating._id)
    );
    await book.save();

    res.json(deletedRating);
  }
  catch (err)
  {
    console.log(err);
    res.sendStatus(500);
  }
}





module.exports = router;