import { UserRepository } from "../repositories/User.repository";
import { User } from "../models/User.model"
import { HashPassword, ComparePassword } from "../helpers/Password.help";
const UserService = {
    // User service methods here
    CreateUserServices: async (userData: User) =>{
        // Implementation for creating a user
        try {
            // Simulate user creation logic
            const existingUser = await UserRepository.prototype.FindUserByEmail(userData.email);
            if (existingUser) {
                throw new Error('User with this email already exists');
            }else{
                const hashedPassword = await HashPassword(userData.password);
                userData.password = hashedPassword;
                const newUser = await UserRepository.prototype.CreateUser(userData);
                return newUser;
            }

        } catch (error) {
            throw new Error('Error creating user: ' + (error as Error).message);
        }
    },

    FindAllUsersServices: async() =>{
        try{
            const users = await UserRepository.prototype.FindAllUsers();
            return users;
        }catch(error){
           throw new Error('Error fetching users:' + (error as Error).message)
        }
    },
    UpdateUserServices: async(userId: number, UpdateUserData: Partial<User>)=>{
        try{
            const UpdateUser = await UserRepository.prototype.UpdateUser(userId, UpdateUserData)
            return UpdateUser;
        }catch(error){
            throw new Error('Error updating user:' + (error as Error).message)
        }
    },
    DeleteUserServices: async(userId: number)=>{
        try{
            const isDeleted = await UserRepository.prototype.DeleteUser(userId)
            return isDeleted
        }catch(error){
            throw new Error("Error deleteing user:" + (error as Error).message)
        }
    }
    
}

export default UserService