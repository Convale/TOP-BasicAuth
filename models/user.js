const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Export user model
module.exports = mongoose.model("User", userSchema);
