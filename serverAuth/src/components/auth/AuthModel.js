const mongoose = require("mongoose");
const { Schema } = mongoose;

const addUserSchema = new Schema({
 name:    String,
 password: String,
 mobileNo: String,
 createdAt: { type: Date, default: Date.now },
});

const authUser = mongoose.model('authUsers',addUserSchema)

module.exports = authUser;



const authSchema = new Schema({
  email: String,
  age: String,
  name: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});
const AuthModel = mongoose.model("users", authSchema);
module.exports = AuthModel;