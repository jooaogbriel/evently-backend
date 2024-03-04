import { Request, Response } from "express"
import { updatePostService } from "../../shared/services/posts/updatePostService"

const updatePostController = (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const userId = req.user?.userId;
        const { content, imgUrl } = req.body
        const postUpdate = updatePostService(id, userId, {content, imgUrl})
        return res.status(200).send(postUpdate)
    } catch (error) {
		if (error instanceof Error) {
			return res.status(404).json({
				message: error.message,
			})
		}
	}
}
export { updatePostController }