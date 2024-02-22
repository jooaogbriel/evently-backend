import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  imgUrl: z.string(),
});

const updateUserSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  imgUrl: z.string(),
  privated: z.boolean()
});

const postsSchema = z.object({
  userId: z.string(),
  content: z.string(),
  imgUrl: z.string(),
})


export { userSchema, updateUserSchema, postsSchema };
