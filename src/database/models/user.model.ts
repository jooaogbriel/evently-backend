import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    imgUrl : { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

export { userSchema, User }