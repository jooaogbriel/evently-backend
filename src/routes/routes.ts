import { userLoginController } from "../controllers/login/userLoginController";
import { createPostController } from "../controllers/posts/createPostController";
import { createUserController } from "../controllers/user/createUserController";
import { deleteUserController } from "../controllers/user/deleteUserController";
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
router.patch('/updateUser/:id', updateUserController)
router.delete('/deleteUser/:id', deleteUserController)
router.post('/createPost',authMiddleware ,createPostController)
export {router}