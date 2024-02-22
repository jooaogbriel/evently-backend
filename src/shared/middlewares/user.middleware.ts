declare global {
  namespace Express {
      interface Request {
          user?: JwtPayload;
      }
  }
}

import { Request, Response, NextFunction} from "express";
import jwt, {JwtPayload} from 'jsonwebtoken';
import { User } from "../../database/models/user.model";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  console.log(token)
  try {
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
    const decoded = jwt.verify(token, 'c510cd8607f92e1e09fd0b0d0d035c16d2428fa4') as JwtPayload; // Substitua 'seuSegredo' pelo seu segredo JWT
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    req.user = user
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export { authMiddleware }
