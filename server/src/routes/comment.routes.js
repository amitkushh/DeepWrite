import express from "express";
import {
  addCommenet,
  getBlogComments,
} from "../controllers/comment.controller.js";

const commentRouter = express.Router();

commentRouter.post("/add-comment", addCommenet);
commentRouter.get("/comments", getBlogComments);

export default commentRouter;
