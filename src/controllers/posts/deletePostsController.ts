import { Request, Response } from "express"
import { deletePostsService } from "../../shared/services/posts/deletePostsService"

const deletePostsController = (req: Request, res: Response) => {

    try {
        const { id } = req.params
        console.log('ID:', id)
        const userId = req.user?.userId;
        console.log('USER DO ID:', userId)
        const postsDeleted = deletePostsService(id, userId)

        return res.json({ message: 'deleted', postsDeleted });
    } catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({
				message: error.message,
			})
		}
	}
}
export { deletePostsController }