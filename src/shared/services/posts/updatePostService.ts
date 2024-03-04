import { z } from "zod";
import { postsUpdate } from "../../../database/validator";
import { Post } from "../../../database/models/posts.model";
import { User } from "../../../database/models/user.model";

const updatePostService = async(id: string,idUser:string, { content, imgUrl}: z.infer<typeof postsUpdate>) => {
    
    const postById = await Post.findByIdAndUpdate(id, { content, imgUrl})
    console.log('postById:', postById)

    try {
        if (!postById) {
            throw new Error('Post não encontrado.');
        }
        if (postById.ownerId !== idUser) {
            throw new Error('Você não tem permissão para excluir este post.');
        }

        const updatePostResult = await User.updateOne(
            { _id: idUser, 'posts._id': id },
            { $set: { 'posts.$.content': content, 'posts.$.imgUrl': imgUrl } }
        );

    } catch(err) {
        console.error(err)
	}
}

export { updatePostService }