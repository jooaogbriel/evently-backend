import { Request, Response } from "express";
import { followUserService } from "../../shared/services/user/followUserService";

const followUserController = (req: Request, res: Response) => {

    const { idUser } = req.params 
    const user = followUserService(idUser)
    

}
export { followUserController }