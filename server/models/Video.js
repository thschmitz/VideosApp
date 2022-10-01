import mongoose from "mongoose";


const VideoSchema = new mongoose.Schema({
    userId: {
        type:String,
        required: true,
    },
    videoTitle: {
        type:String,
        required:true,
    },
    desc: {
        type:String,
        required:true,
    },
    imgUrl: {
        type:String,
        required:true,
    },
    videoUrl: {
        type:String,
        required:true,
    },
    views: {
        type:Number,
        required:true,
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    deslikes: {
        type: [String],
        default: []
    }

}, {timestamps:true})

export default mongoose.model("Video", VideoSchema);