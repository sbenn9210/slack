import User from "../db/models/user.model";


export class UserRepository {
    async create(user: any) {
        const {name, username, email, password} = user;
        
        const newUser = await User.query().insert({
            name,
            username,
            email,
            password
            })

        return newUser;
    }

    async findAll() {
        const users = await User.query().withGraphFetched('message')
        return users
    }

    async findOne(id: string) {
        const user = await await User.query().findById(id).withGraphFetched('message')
        return user
    }

}
