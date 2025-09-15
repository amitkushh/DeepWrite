import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  deleteBlogById,
  togglePublish,
} from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), authMiddleware, createBlog);
blogRouter.get("/all", authMiddleware, getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", authMiddleware, deleteBlogById);
blogRouter.post("/toggle-publish", authMiddleware, togglePublish);

export default blogRouter;
