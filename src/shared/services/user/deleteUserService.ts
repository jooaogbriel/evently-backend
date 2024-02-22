import { User } from "../../../database/models/user.model";

const deleteUserService = async(id: string) => {

    const deleteUser = await User.findByIdAndDelete(id);
    return deleteUser;
}
export { deleteUserService };