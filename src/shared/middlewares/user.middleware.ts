declare global {
  namespace Express {
      interface Request {
          user?: JwtPayload;
      }
  }
}


const bodyParser = require('body-parser');
require('dotenv').config()
import { Request, Response, NextFunction} from "express";
import jwt, {JwtPayload} from 'jsonwebtoken';
import { User } from "../../database/models/user.model";


const jwtToken = process.env.JWT_TOKEN

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  const token = req.header('Authorization');
  console.log('Token:', token)
  
  try {
    if (!token) {
      console.log('Token não fornecido');
      return res.status(401).json({ message: 'Token não fornecido' });
    }
    const decoded = jwt.verify(token, String(jwtToken!)) as JwtPayload;
    console.log('Decoded:', decoded);
    console.log(decoded.userId)


    const user = await User.findById(decoded.userId);
    req.user = { userId: decoded.userId };
    console.log('User:', user)

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    console.log('Middleware - req.user:', req.user);
    next();
  } catch (error) {
    if (error instanceof Error){
      return res.status(401).send({
        "error": error.name,
        "message": error.message,
        "stack": error.stack
      })
    }
  }
};

export { authMiddleware }
