import Comment from "../models/comment.models.js";

//Add Comment
export const addCommenet = async (req, res) => {
  try {
    const { blog, name, content } = req.body;

    await Comment.create({
      blog,
      name,
      content,
    });

    res.status(201).json({
      success: true,
      message: "Comment added for review",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//Get Comment For Individual Blog
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;

    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
