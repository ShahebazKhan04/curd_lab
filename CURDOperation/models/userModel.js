import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "number is required"],
  },
});

// let UserModel = mongoose.model("database Name" , schema Name);
let UserModel = mongoose.model("userDetails" , userSchema);

export default UserModel;