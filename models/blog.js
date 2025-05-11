import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", blogSchema);
