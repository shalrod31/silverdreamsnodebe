const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const login = new Schema({
  userName: String,
  password: String
});

const LoginModel = mongoose.model('Login', login);

module.exports = LoginModel;