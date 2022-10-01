import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB!")
    }).catch((err) => {
        throw err;
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    connect();
    console.log("Application running on port", PORT)
})