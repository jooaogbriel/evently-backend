 // src/middlewares/verifyBookExist.middleware.ts
 import { Request, Response, NextFunction } from "express";
 import { AppError } from "../errors";
 //import books from "../database"; -> database 
 
 const verifyBookExistMiddleware = (
   req: Request,
   res: Response,
   next: NextFunction
 ): Response | void => {
   const id: number = parseInt(req.params.id)
//    const foundBook = books.find((book) => book.id == id);
 
//    if (!foundBook) { ---------- > DATABASE
//      throw new AppError("Book not found", 404)
//    };
 
   return next();
 };
 
 export { verifyBookExistMiddleware };