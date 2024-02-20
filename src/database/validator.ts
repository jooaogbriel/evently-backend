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


export { userSchema, updateUserSchema };
