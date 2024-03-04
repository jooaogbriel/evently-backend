import { z } from "zod"
import { updateUserSchema } from "../../../database/validator"
import { User } from "../../../database/models/user.model"
import bcrypt from "bcryptjs";

const updateUserService = async (id: string,{email, username, password, imgUrl, privated}: z.infer<typeof updateUserSchema>) => {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await User.findOneAndUpdate({id,email, username, password: hashedPassword, imgUrl, privated})
        return user
}
export { updateUserService }