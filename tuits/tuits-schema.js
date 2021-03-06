import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    dislikes: Number,
    stats: {
      comments: Number,
    },
    postedBy: {
      username: String,
    },
  },
  { collection: "tuits" }
);
export default schema;
