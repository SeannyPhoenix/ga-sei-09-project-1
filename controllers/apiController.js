const db = require('../models');

async function indexBooks(req, res) {
  try {
    let books = await db.Book.find()
      .populate('ratings');
    res.json(books);
  }
  catch (err) {
    console.log(`Book Index Error`, err);
    res.sendStatus(500);
  }
}

async function showBook(req, res) {
  try {
    let book = await db.Book.findById(req.params.id)
      .populate('ratings');
    res.json(book);
  }
  catch (err) {
    console.log(`Book Show Error`, err);
    res.sendStatus(500);
  }
}

async function indexUsers(req, res) {
  try {
    let users = await db.User.find();
    res.json(users);
  }
  catch (err) {
    console.log(`User Index Error`, err);
    res.sendStatus(500);
  }
}

async function showUser(req, res) {
  try {
    let user = await db.User.findById(req.params.id);
    res.json(user);
  }
  catch (err) {
    console.log(`User Show error:`, err);
    res.sendStatus(500);
  }
}

async function updateUser(req, res) {
  try {
    let updatedUser = await db.User.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      });
    res.json(updatedUser);
  }
  catch (err) {
    console.log(`Update User Error`, err);
    res.sendStatus(500);
  }
}

async function showUserRatings(req, res) {
  try {
    let user = await db.User.findById(req.params.id)
      .populate('ratings');
    res.json(user.ratings);
  }
  catch (err) {
    console.log(`Show User Ratings Error`, err);
    res.sendStatus(500);
  }
}

async function showBookRatings(req, res) {
  try {
    let book = await db.Book.findById(req.params.id)
      .populate('ratings');
    res.json(book.ratings);
  }
  catch (err) {
    console.log(`Show Book Ratings Error`, err);
    res.sendStatus(500);
  }
}

async function indexRatings(req, res) {
  try {
    let ratings = await db.Rating.find();
    res.json(ratings);
  }
  catch (err) {
    console.log(`Index Ratings Error`, err);
    res.sendStatus(500);
  }
}

async function showRating(req, res) {
  try {
    let rating = await db.Rating.findById(req.params.id);
    res.json(rating);
  }
  catch (err) {
    console.log(`Show Rating Error`, err);
    res.sendStatus(500);
  }
}

async function createRating(req, res) {
  try {
    let user = await db.User.findById(req.body.user);
    let book = await db.Book.findById(req.body.book);

    // Check if this user had already rated this book
    user.ratings.forEach((rating) => {
      if (rating.book === book._id) {
        res.status(400).json({
          status: 400,
          error: 'User had already rated book.'
        });
        return;
      }
    });

    let newRating = await db.Rating.create(req.body);

    user.ratings.push(newRating._id);
    await user.save();
    book.ratings.push(newRating._id);
    await book.save();

    res.json(newRating);
  }
  catch (err) {
    console.log(`Create Rating Error:`, err);
    res.sendStatus(500);
  }
}

async function updateRating(req, res) {
  try {
    let updatedRating = await db.Rating.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    );
    res.json(updatedRating);
  }
  catch (err) {
    console.log(`Update Book Ratings Error:`, err);
    res.sendStatus(500);
  }
}

async function deleteRating(req, res) {
  try {
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
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = {
  indexBooks,
  showBook,
  indexUsers,
  showUser,
  updateUser,
  showRating,
  showUserRatings,
  showBookRatings,
  indexRatings,
  showRating,
  createRating,
  updateRating,
  deleteRating
}