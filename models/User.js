const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UserSchema = new Schema(
{
  email:
  {
    type: String,
    required: true
  },
  screenName: String,
  ratings: [
  {
    type: ObjectId,
    ref: 'Raiting'
  }]
  // Stretch: Create Lists
});

const User = mongoose.model('User', UserSchema);

module.exports = User;