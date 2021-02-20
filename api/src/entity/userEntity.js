const { Mongoose } = require("mongoose")
const connection = require("../connection")
const userSchema = new connection.Schema({
  name: { type: String, required: true },
  sobrenome: { type: String, required: true },
});

const userEntity = connection.model("user", userSchema)

module.exports = userEntity