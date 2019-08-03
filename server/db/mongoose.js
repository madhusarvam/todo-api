const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://madhusarvam:Amma@1191@ds01316.mlab.com:1316/todos',{ useNewUrlParser: true });

module.exports = {
  mongoose : mongoose
}