import { Request, Response } from "express"
import { listUserService } from "../../shared/services/user/listUserService"

const listUserController = async (req: Request, res: Response) => {

    try {
        const users = await listUserService()
        return res.json(users)
    } catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
			})
		}
	}
}
export { listUserController }