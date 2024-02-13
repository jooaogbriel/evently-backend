import { IUser } from "../../../types";
import { userSchema, User } from "../../../database/models/user.model";

const createUsersService = async ({
  _id,
  username,
  email,
  password,
  imgUrl,
}: IUser): Promise<IUser> => {
  try {
    const newUser = new User({
      _id,
      username,
      email,
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
