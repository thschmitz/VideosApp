import express from "express";
import { addComment, deleteComment, editComment, getComment } from "../controllers/comment.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment)
router.get("/:videoId", getComment)
router.delete("/:videoId", verifyToken, deleteComment)
router.put("/:videoId", verifyToken, editComment)

export default router;