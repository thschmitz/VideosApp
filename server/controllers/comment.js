import Comment from "../models/Comments.js";
import Video from "../models/Video.js";

export const addComment = async(req, res, next) => {
    const newComment = new Comment({...req.body, userId: req.user.id})
    try{
        const savedComment = await newComment.save();

        res.status(200).send(savedComment)
    }catch(err) {
        next(err);
    }
}

export const deleteComment = async(req, res, next) => {
    try{
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        
        if(req.user.id === comment.userId || req.user.id === video.userId) { // if the comment belongs us or if the comment is inside a post that I created, you can make this action
            await Comment.findByIdAndDelete(req.params.id);
            res.status(200).json("The comment has been deleted!");
        } else {
            return next(createError(403, "You can delete only your comment!"))
        }
    }catch(err) {
        next(err);
    }
}

export const getComment = async(req, res, next) => {
    try{
        const comments = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(comments);
    }catch(err) {
        next(err);
    }
}

export const editComment = async(req, res, next) => {
    try{
        
    }catch(err) {
        next(err);
    }
}