import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model';
import { z } from 'zod';

const jwtSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });
const userLoginService = async({email, password}: z.infer<typeof loginSchema>) => {

    try {
        const user = await User.findOne({ email });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return null;
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, jwtSecret, {
            expiresIn: '24h'
        })

        return token
    } catch (error) {
        console.error()
    }
    
}
export { userLoginService }