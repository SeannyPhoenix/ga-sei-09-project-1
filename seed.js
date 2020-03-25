const mongoose = require('mongoose');
const db = require('./models');
const data = require('./docs/seed_data.js');


async function seed()
{
  try
  {
    let info;

    info = await db.User.deleteMany();
    console.log(`Deleted ${info.n} users.`);
    info = await db.User.create(data.users);
    console.log(`Added ${info.length} users.`);

    info = await db.Book.deleteMany();
    console.log(`Deleted ${info.n} books.`);
    info = await db.Book.create(data.books);
    console.log(`Added ${info.length} books.`);

    info = await db.Rating.deleteMany();
  }
  catch (err)
  {
    console.log(err);
  }
  mongoose.disconnect();
}

seed();
