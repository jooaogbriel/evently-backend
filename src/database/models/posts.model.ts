import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const postsModel = new mongoose.Schema({
    _id: { type: String, required: true },
    ownerId: { type: String, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Comment = mongoose.model('Comment', commentModel);
const Post = mongoose.model('Post', postsModel);

export { commentModel, Comment, postsModel, Post };