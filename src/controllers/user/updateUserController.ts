import { Request, Response } from "express";
import { updateUserService } from "../../shared/services/user/updateUserService";

const updateUserController = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const {email, username, password, imgUrl, privated} = req.body
        const newUser = updateUserService(id, {email, username, password, imgUrl, privated})
        return res.status(200).send(newUser)
    } catch (error) {
		if (error instanceof Error) {
			return res.status(404).json({
				message: error.message,
			})
		}
	}
}

export { updateUserController }