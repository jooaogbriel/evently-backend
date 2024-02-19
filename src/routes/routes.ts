import { userLoginController } from "../controllers/login/userLoginController";
import { createUserController } from "../controllers/user/createUserController";
import { listUserByIdController } from "../controllers/user/listUserById.controller";
import { listUserController } from "../controllers/user/listUserController";

const express = require('express');
const router = express.Router();

router.post('/createUser', createUserController)
router.get('/getUsers', listUserController)
router.get('/getUsers/:id', listUserByIdController)
router.post('/login', userLoginController)
export {router}