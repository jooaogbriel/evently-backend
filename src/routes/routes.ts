import { createUserController } from "../controllers/user/createUserController";

const express = require('express');
const router = express.Router();

router.post('/createUser', createUserController)
export {router}