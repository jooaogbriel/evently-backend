import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user.model';
import { z } from 'zod';
require('dotenv').config()

const jwtToken = process.env.JWT_TOKEN

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

        const token = jwt.sign({ email: email,userId: user._id }, String(jwtToken!), {
            expiresIn: '24h'
        })

        return token
    } catch (error) {
        console.error()
    }
    
}
export { userLoginService }