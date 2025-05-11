import express from "express";
import Blog from "../models/blog.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  const { headline, content } = req.body;
  if (!headline || !content)
    return res.status(400).json({ message: "Missing fields" });

  try {
    const blog = new Blog({ headline, content });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating blog post" });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog posts" });
  }
});

export default router;
