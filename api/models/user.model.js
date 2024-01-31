import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://m.media-amazon.com/images/I/312o8VfZdaL._AC_.jpg",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
