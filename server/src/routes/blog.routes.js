import express from "express";
import { createBlog } from "../controllers/blog.controller.js";
import upload from "../middlewares/multer.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), authMiddleware, createBlog);

export default blogRouter;
