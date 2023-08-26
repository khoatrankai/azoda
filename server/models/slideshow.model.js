import mongoose from "mongoose";

const slideshowSchema = mongoose.Schema({
    image: {
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true
    }
},{timestamps: true});

export default mongoose.model('Slideshow',slideshowSchema);