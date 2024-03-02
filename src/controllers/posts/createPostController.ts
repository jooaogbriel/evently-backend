import { Request, Response } from "express";
import { createPostsService } from "../../shared/services/posts/createPostsService";

const createPostController = async(req: Request, res: Response) => {
    try {
        const { content, imgUrl } = req.body
        const userId = req.user?.userId;
        console.log('userID:', userId)
        const post = await createPostsService({
            content, 
            imgUrl, 
            ownerId: userId as string,
        })
        console.log('Controlador - req.user:', req.user);
        return res.status(201).json(post);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
export { createPostController };