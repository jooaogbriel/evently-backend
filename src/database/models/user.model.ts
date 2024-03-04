import mongoose from "mongoose";
import { number } from "zod";

const userModel = new mongoose.Schema({
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    imgUrl : { type: String, required: true },
    bio: {type: String},
    privated: { type: Boolean },
    followers: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
    following: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
    posts: [{ type: Object, ref: 'Post',}],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], 
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

userModel.methods.follow = function(userId: string) {
    if (!this.following.includes(userId)) {
        this.following.push(userId);
        return this.save();
    }
    return Promise.resolve(this);
};

userModel.methods.unfollow = function(userId: string) {
    this.following.pull(userId);
    return this.save();
};
userModel.plugin(require('mongoose-autopopulate'));
const User = mongoose.model('User', userModel);

export { userModel, User }

