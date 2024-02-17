import { User } from "../../../database/models/user.model"

const listUserByIdService = async (id: string) => {
    try {
        const user = User.findById(id)
        return user
    } catch (error) {
        console.error(error)
    }
}
export { listUserByIdService }