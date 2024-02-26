import { z } from 'zod'
import { postsSchema } from '../../../database/validator'
import { Post } from '../../../database/models/posts.model'
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../../database/models/user.model';
const createPostsService = async ({ content, imgUrl, ownerId }: z.infer<typeof postsSchema>) => {
    console.log('ID NO SERVICEEEE', ownerId)

    const _id = uuidv4();
    try {
        // Validar os dados usando o schema do Zod
        postsSchema.parse({ ownerId, content, imgUrl});

        const newPost = new Post({
            _id,
            content,
            imgUrl,
            ownerId: ownerId,
            likes: [],
            comments: [],
        });
        console.log('Owner Post:', newPost.ownerId)
        console.log('POST NOVOOO', newPost)
        await newPost.save();
        const user = await User.findById({ _id: ownerId });
        if (user) {
            user.posts.push(newPost); 
            await user.save();
        } else {
            console.error('Usuário não encontrado.');
            throw new Error('Falha ao criar post');
        }
        return newPost;
    } catch (error) {
        console.error('Erro ao criar post:', error);
        throw new Error('Falha ao criar post');
    }
};

export { createPostsService };
