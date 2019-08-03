const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MongoDB_URL || 'mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true });

module.exports = {
  mongoose : mongoose
}