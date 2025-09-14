import config from "../config/env.config.js";
import jwt from "jsonwebtoken";

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
    console.log("Error in Admin login", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
