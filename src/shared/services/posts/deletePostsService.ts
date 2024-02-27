import { Post } from "../../../database/models/posts.model"
import { User } from "../../../database/models/user.model"

const deletePostsService =  async(idPost: string, idUser: string) => {

    const post = await Post.findById(idPost)
    console.log('POST:::', post)
    try {
        if (!post) {
            throw new Error('Post não encontrado.');
        }
        if (post.ownerId !== idUser) {
            throw new Error('Você não tem permissão para excluir este post.');
        }
        const deletedPost = await Post.findByIdAndDelete(idPost);
        return deletedPost;

    } catch(err) {
        console.error(err)
	}
}
export { deletePostsService };