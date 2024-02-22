import { Request, Response } from "express"
import { deleteUserService } from "../../shared/services/user/deleteUserService"

const deleteUserController = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserService(id);

        if (!deletedUser) {
          return res.status(404).json({
            message: 'User not found',
          });
        }
    
        return res.json({ message: 'deleted', deletedUser });
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({
            message: error.message,
          });
        }
      }

}
export { deleteUserController }