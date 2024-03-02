import { userLoginController } from "../controllers/login/userLoginController";
import { createPostController } from "../controllers/posts/createPostController";
import { deletePostsController } from "../controllers/posts/deletePostsController";
import { listPostsController } from "../controllers/posts/listPostsController";
import { createUserController } from "../controllers/user/createUserController";
import { deleteUserController } from "../controllers/user/deleteUserController";
import { followUserController } from "../controllers/user/followUserController";
import { listUserByIdController } from "../controllers/user/listUserById.controller";
import { listUserController } from "../controllers/user/listUserController";
import { updateUserController } from "../controllers/user/updateUserController";
import { authMiddleware } from "../shared/middlewares/user.middleware";

const express = require('express');
const router = express.Router();

router.post('/createUser', createUserController)
router.get('/getUsers', listUserController)
router.get('/getUsers/:id', listUserByIdController)
router.post('/login', userLoginController)
router.patch('/updateUser/:id', authMiddleware, updateUserController)
router.delete('/deleteUser/:id', deleteUserController)
router.post('/follow', authMiddleware, followUserController)

router.post('/createPost',authMiddleware ,createPostController)
router.get('/listPosts', authMiddleware, listPostsController)
router.delete('/deletePost/:id', authMiddleware, deletePostsController)
export {router}