import mongoose, { mongo } from "mongoose";

const linkSchema = new mongoose.Schema({
    link: {type: String, required: true},
    shortCode: {type: String, required: true},
    clicks: {type: Number, default: 0},
    time: {type: Date, default: Date.now()}
});

const Link = mongoose.model('Link', linkSchema)

export default Link;