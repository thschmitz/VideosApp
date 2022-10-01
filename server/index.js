import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB!")
    }).catch((err) => {
        throw err;
    })
}
app.use(express.json()); // Allow the application to see the request with json format

app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connect();
    console.log("Application running on port", PORT)
})