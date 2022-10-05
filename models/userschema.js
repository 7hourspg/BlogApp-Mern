import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  other: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
 
}
);

const User = mongoose.model("User", userSchema);
export default User;
