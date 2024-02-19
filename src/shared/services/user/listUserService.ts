import { User } from "../../../database/models/user.model";

const listUserService = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        console.error(error)
    }
}
export { listUserService }