const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js');
const Book = require('./Book.js');

const RatingSchema = new Schema(
{
  rating:
  {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  review: String,
  user: User.schema,
  book: Book.schema,
  timestamp:
  {
    typs: Date,
    required: true,
    default: new Date()
  }
});

const Rating = mongoose.model('Rating', RatingSchema);

module.export = Rating;