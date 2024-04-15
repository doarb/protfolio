const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

UserSchema.virtual("element").get(function () {
  return {
    id: this.id,
    name: this.name,
    email: this.email,
    role: this.role,
  };
});

module.exports = mongoose.model("users", UserSchema);
