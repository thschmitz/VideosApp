import express from "express";
import { addView, createVideo, deleteVideo, getVideo, randomVideo, searchVideo, subscribe, tagsVideo, trendVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, createVideo)
router.put("/:id", verifyToken, updateVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)
router.put("/view/:id", addView)
router.get("/trend", trendVideo)
router.get("/random", randomVideo)
router.get("/sub", verifyToken, subscribe)
router.get("/tags", tagsVideo);
router.get("/search", searchVideo)

export default router;