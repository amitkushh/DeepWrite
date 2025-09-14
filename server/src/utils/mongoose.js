import mongoose from "mongoose";
import config from "../config/env.config.js";

const connectDB = async () => {
  try {
    mongoose.connection.on("Connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(config.DATABASE_CONNECTION);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error in Connecting to the Database", error);
    process.exit(1);
  }
};

export default connectDB;
