// import { IUser } from "../../../types";
import { User } from "../../../database/models/user.model";
import { userSchema } from "../../../database/validator";
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs";

const createUsersService = async ({
  username,
  email,
  password,
  imgUrl,
}: z.infer<typeof userSchema>) => {

  const _id = uuidv4();
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    // Validar os dados usando o schema do Zod
    userSchema.parse({_id, email, username, password, imgUrl });

    const newUser = new User({
      _id,
      username,
      email,
      password: hashedPassword,
      imgUrl,
      privated: false
    });
    await newUser.save();
    return newUser;

  } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error("Falha ao criar usuário");
  }
};

export default createUsersService;
