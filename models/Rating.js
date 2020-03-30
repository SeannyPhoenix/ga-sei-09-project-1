const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const RatingSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  review: String,
  user: {
    type: ObjectId,
    ref: 'User'
  },
  book: {
    type: ObjectId,
    ref: 'Book'
  },
  timestamp: {
    type: Date,
    required: true,
    default: new Date()
  }
});

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;