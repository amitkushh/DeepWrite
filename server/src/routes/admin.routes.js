import express from "express";
import {
  adminLogin,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
  deleteCommentById,
  approvedCommentById,
} from "../controllers/admin.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/blogs", authMiddleware, getAllBlogsAdmin);
adminRouter.get("/comments", authMiddleware, getAllComments);
adminRouter.get("/dashboard", authMiddleware, getDashboard),
  adminRouter.post("/delete-comment", authMiddleware, deleteCommentById);
adminRouter.post("/approve-comment", authMiddleware, approvedCommentById);

export default adminRouter;
