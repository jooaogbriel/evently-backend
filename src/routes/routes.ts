import { createUserController } from "../controllers/user/createUserController";
import { listUserController } from "../controllers/user/listUserController";

const express = require('express');
const router = express.Router();

router.post('/createUser', createUserController)
router.get('/getUsers', listUserController)
router.get('/getUsers/:id')
export {router}