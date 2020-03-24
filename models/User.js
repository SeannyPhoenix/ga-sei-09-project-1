const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Rating = require('./Rating.js');

const UserSchema = new Schema(
{
  email:
  {
    type: String,
    required: true
  },
  screenName: String,
  ratings: [Rating.schema]
  // Stretch: Create Lists
});

const User = mongoose.model('User', UserSchema);

module.export = User;