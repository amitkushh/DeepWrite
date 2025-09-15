import Blog from "../models/blog.models.js";
import fs from "fs";
import imagekit from "../config/imagekit.js";

export const createBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    //ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);

    //Upload Image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/ai-blog",
    });

    //Optimization ImageKit url transformation
    const optimizationImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const image = optimizationImageUrl;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
    });
  } catch (error) {
    console.log("Error in Creating Blog", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
