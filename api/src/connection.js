const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/roomMatcher", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, //Criar id para cada elemento no banco
});
mongoose.Promise = global.Promise

module.exports = mongoose
