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

// GET Rating Index

// GET Rating Show

// POST Rating Create

// PUT Rating Update

// DELETE Rating Destroy

module.exports = router;