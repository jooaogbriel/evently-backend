import { User } from "../../../database/models/user.model";

const listUserService = async () => {
    try {
        const user = await User.find({})
        return user
    } catch (error) {
        console.error(error)
    }
}
export { listUserService }