import express from "express";
import config from "./config/env.config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./utils/mongoose.js";

//Custom Routes Import
import adminRouter from "./routes/admin.routes.js";
import blogRouter from "./routes/blog.routes.js";

const app = express();
const PORT = config.PORT;

//Middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: config.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

connectDB();

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

//Custom Apies
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/blog", blogRouter)

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
