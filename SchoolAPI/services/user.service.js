
class UserService{

    constructor({UserBusiness}){
        this._userBussiness = UserBusiness;
    }

    async getUsers(){
        const users = await this._userBussiness.getUsers();
        return users;
    }

    async getUser(id){
        const users = await this._userBussiness.getUser(id);
        return users;
    }

    async createUser(user){
        console.log(user)
        const createdUser = await this._userBussiness.createUser(user);
        console.log(createdUser)
        return createdUser;
    }

    async updateUser(id,user){
        const updatedUser = await this._userBussiness.updateUser(id,user);
        return updatedUser;
    }

    async deleteUser(id){
        const deletedUser = await this._userBussiness.deleteUser(id);
        return deletedUser;
    }
}

module.exports = UserService;