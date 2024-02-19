import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    _id: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    imgUrl : { type: String, required: true },
    privated: { type: Boolean }
});

const User = mongoose.model('User', userModel);

export { userModel, User }

