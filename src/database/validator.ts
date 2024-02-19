import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  imgUrl: z.string(),
  
});

export { userSchema };
