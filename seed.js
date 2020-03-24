const mongoose = require('mongoose');
const db = require('./models');
const data = require('./docs/seed_data.js');

async function seed()
{
  try
  {
    let info = await db.User.create(data.users);
    console.log(info);
  }
  catch (err)
  {
    console.log(err);
  }
  mongoose.disconnect();
}

seed();