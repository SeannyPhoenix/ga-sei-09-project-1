const mongoose = require('mongoose');
const User = require('./User.js');
const Book = require('./Book.js');
const Rating = require('./Rating.js');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ibdb",
{
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = {
  User,
  Book,
  Rating
}