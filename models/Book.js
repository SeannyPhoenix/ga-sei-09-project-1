const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  isbn: String,
  genre: String,
  ratings: []
});

const Book = mongoose.model('Book', BookSchema);

module.export = Book;