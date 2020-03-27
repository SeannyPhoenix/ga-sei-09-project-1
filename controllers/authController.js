const db = require('../models');
const bcrypt = require('bcryptjs');
const emailValidator = require('email-validator');
const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();
passwordSchema
  .is().min(8)
  .is().max(20)
  .has().uppercase()
  .has().lowercase()
  .has().digits()
  .has().not().spaces();

async function register(req, res) {
  try {
    // Validate the data
    const validate = [];
    validate.push(req.body.firstName !== '');
    validate.push(req.body.lastName !== '');
    validate.push(emailValidator.validate(req.body.email));
    validate.push(passwordSchema.validate(req.body.password));
    if (validate.some(check => !check)) {
      res.json({
        status: 400,
        message: 'Invalid Data'
      });
      return;
    }

    // Check if a user with this email address already exists
    let exists = await db.User.findOne({
      email: req.body.email
    });
    if (exists) {
      res.json({
        status: 400,
        message: 'Account already registered.'
      });
      return;
    }

    // Salt and hash the password
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(req.body.password, salt);
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    }

    // Create New user
    let newUser = await db.User.create(userData)
    res.status(201).json({
      status: 201,
      newUser: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email
      }
    });
  }
  catch (err) {
    console.log(`Error`, err);
    res.json({
      status: 400
    });
  }
}

async function login(req, res) {
  try {
    // Find User By Email
    let user = await db.User.findOne({
      email: req.body.email
    });
    if (!user) {
      throw new Error(`Invalid credentials`);
    }

    // Hash Password From User Request and Compare Against Found User Password
    let isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      // Create a New Session (Key to the Kingdom)
      req.session.currentUser = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      res.status(200).json({
        status: 200,
        user: req.session.currentUser
      });
    }
    else {
      // Passwords Do Not Match, Respond with User Error
      throw new Error(`Invalid credentials`);
    }
  }
  catch (err) {
    console.log(`Login Error:`, err);
    return res.status(400).json({
      status: 400,
      message: 'Invalid credentials'
    });
  }
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