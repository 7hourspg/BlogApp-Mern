import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
}
);

const Post = mongoose.model("Blog", userSchema);
export default Post;
