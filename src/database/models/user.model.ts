import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    imgUrl : { type: String, required: true },
    privated: { type: Boolean },
    followers: {type: Number},
    following: { type: Number },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const User = mongoose.model('User', userModel);

export { userModel, User }

