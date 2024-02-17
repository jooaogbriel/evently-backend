import { z } from 'zod';

const userSchema = z.object({
  _id: z.number(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  imgUrl: z.string(),
});

export { userSchema };
