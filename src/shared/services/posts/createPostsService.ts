import { z } from 'zod'
import { postsSchema } from '../../../database/validator'
import { Post } from '../../../database/models/posts.model'
import { v4 as uuidv4 } from 'uuid';

const createPostsService = async ({ content, imgUrl, userId }: z.infer<typeof postsSchema>) => {
    const postId = uuidv4();
    try {
        // Validar os dados usando o schema do Zod
        postsSchema.parse({ postId, content, imgUrl, userId });

        const newPost = new Post({
            postId,
            content,
            imgUrl,
            ownerPost: userId,
            likes: [],
            comments: [],
        });
        console.log(newPost)
        await newPost.save();
        return newPost;
    } catch (error) {
        console.error('Erro ao criar post:', error);
        throw new Error('Falha ao criar post');
    }
};

export { createPostsService };
