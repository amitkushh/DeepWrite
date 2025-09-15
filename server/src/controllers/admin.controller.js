import config from "../config/env.config.js";
import jwt from "jsonwebtoken";
import Blog from "../models/blog.models.js";
import Comment from "../models/comment.models.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking email and password match or not

    if (email !== config.ADMIN_EMAIL || password !== config.ADMIN_PASSWORD) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ email }, config.JWT_SECRET); //create token
    res.status(200).json({
      //send token
      success: true,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//Fetching All Blogs
export const getAllBlogsAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//Fetching All Comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate("Blog")
      .sort({ createdAt: -1 }); //empty object means fetch all
    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//Fetch All Data
export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments(); //total number of blogs
    const comments = await Comment.countDocuments(); //total number of comments
    const draftBlogs = await Blog.countDocuments({ isPublished: false }); //draft blogs means not published

    const dashboardData = {
      recentBlogs,
      blogs,
      comments,
      draftBlogs,
    };

    res.status(200).json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//Admin Delete Comment By Id
export const deleteCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Comment Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//Approved comment by admin
export const approvedCommentById = async (req, res) => {
  try {
    const { id } = req.body;

    await Comment.findByIdAndUpdate(id, { isApproved: true });
    res.status(200).json({
      success: true,
      message: "Comment Approved Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
