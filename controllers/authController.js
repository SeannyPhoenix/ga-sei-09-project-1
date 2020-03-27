const db = require('../models');
const bcrypt = require('bcryptjs');

async function register(req, res) {
  try {
    // Validate input
    if (
      req.firstName === '' ||
      req.lastName === '' ||
      req.email === '' ||
      req.password === ''
    ) {
      res.json({
        status: 200,
        message: 'Invalid Data'
      });
      return;
    }

    // Check if a user with this email address already exists
    if (await db.User.findOne({
        email: req.email
      })) {
      // Found a user
      res.json({
        status: 400,
        message: 'Account already registered.'
      });
      return;
    }

    // Salt and hash the password
    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'
      });
      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) return res.status(400).json({
          status: 400,
          message: 'Something went wrong, please try again'
        });
        // Construct User Object with Hashed Password
        const userData = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
        }
        // Create New user
        db.User.create(userData, (err, newUser) => {
          if (err) return res.status(400).json({
            status: 400,
            message: 'Something went wrong, please try again'
          });
          res.status(201).json({
            status: 201,
            message: 'Success'
          });
        });
      });
    });

    res.json({
      status: 200,
      data: req.body
    });
  }
  catch (err) {
    console.log(`Error`, err);
    res.json({
      status: 500
    });
  }

}

async function login(req, res) {
  res.json({
    status: 200,
    message: 'login'
  });
}

async function logout(req, res) {
  res.json({
    status: 200,
    message: 'logout'
  });
}

async function verify(req, res) {
  res.json({
    status: 200,
    message: 'verify'
  });
}

module.exports = {
  register,
  login,
  logout,
  verify
}