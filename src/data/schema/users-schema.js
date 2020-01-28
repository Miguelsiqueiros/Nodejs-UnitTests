const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  name: { type: String, required: true },
  pin: { type: Number, required: false }
});

module.exports = moongose.model("users", userSchema, "users");
