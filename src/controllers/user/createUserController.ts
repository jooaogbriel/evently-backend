import { Response, Request } from "express";
import createUsersService from "../../shared/services/user/createUserService";

export const createUserController = async (req: Request, res: Response) => {
    try {
		const { _id, username, email, password, imgUrl } = req.body

		const user = await createUsersService({
            _id,
            username,
			email,
			password,
			imgUrl
        })

		return res.status(201).json(user)
	} catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
			})
		}
	}
}