import { Request, Response } from "express"
import { updatePostService } from "../../shared/services/posts/updatePostService"

const updatePostController = (req: Request, res: Response) => {

    const { id } = req.params
    const { content, imgUrl } = req.body
    const postUpdate = updatePostService(id, {content, imgUrl})


}
export { updatePostController }