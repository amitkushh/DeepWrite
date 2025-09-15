import jwt from "jsonwebtoken";
import config from "../config/env.config.js";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const verify = jwt.verify(token, config.JWT_SECRET);

    if (!verify) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    next();
  } catch (error) {
    console.log("Error in middleware", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default authMiddleware;
