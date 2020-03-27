const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ibdb", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

module.exports = {
  User: require('./User.js'),
  Book: require('./Book.js'),
  Rating: require('./Rating.js'),
  User: require('./User.js'),
}