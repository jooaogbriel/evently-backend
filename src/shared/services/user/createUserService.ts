// import { IUser } from "../../../types";
import { User } from "../../../database/models/user.model";
import { userSchema } from "../../../database/validator";
import { z } from 'zod';

const createUsersService = async ({
  _id,
  username,
  email,
  password,
  imgUrl,
}: z.infer<typeof userSchema>) => {

  try {
    // Validar os dados usando o schema do Zod
    userSchema.parse({_id, email, username, password, imgUrl });

    const newUser = new User({
      _id,
      email,
      username,
      password,
      imgUrl,
    });
    await newUser.save();
    return newUser;

  } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error("Falha ao criar usuário");
  }
};

export default createUsersService;
