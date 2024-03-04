import { z } from "zod";
import { postsUpdate } from "../../../database/validator";
import { Post } from "../../../database/models/posts.model";

const updatePostService = (id: string, { content, imgUrl}: z.infer<typeof postsUpdate>) => {
    
}

export { updatePostService }