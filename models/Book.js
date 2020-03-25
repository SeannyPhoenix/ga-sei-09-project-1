const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const BookSchema = new Schema(
{
  title:
  {
    type: String,
    required: true
  },
  author:
  {
    type: String,
    required: true
  },
  image: String,
  // isbn: String,
  genre: String,
  ratings: [
  {
    type: ObjectId,
    ref: 'Rating'
  }]
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;