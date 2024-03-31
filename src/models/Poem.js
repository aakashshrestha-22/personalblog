import mongoose from "mongoose";

const poemBlog = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});
const Poem = mongoose.models.User || mongoose.model("Poem", poemBlog, "users");
export default Poem;
