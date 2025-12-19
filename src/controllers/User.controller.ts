import type { Request, Response } from 'express'
import UserService from '../services/User.service'
import { logger } from '../utils/Logger.util'
import { User } from '../models/User.model'


const UserController = {
    CreateUser: async (req: Request, res:Response): Promise<void> => {
        try{
            const userData: User = req.body
            const newUser = await UserService.CreateUserServices(userData)
            res.status(201).json({
                success: true,
                data: newUser,
            })
        }catch (error: any) {
            logger.error(`Error creating user: ${(error as Error).message}`)
            res.status(500).json({ 
                success: false,
                code: 'USR_00',
                message: 'Error creating user',
                error: (error as Error).message 
            })
        }
    },
    FindAllUsers: async (req:Request, res:Response): Promise<void> =>{
        try{
            const users = await UserService.FindAllUsersServices()
            res.status(200).json({
                success: true,
                data: users,
            })
        }catch(error: any){
            logger.error(`Error Finding all users: ${(error as Error).message}`)
            res.status(500).json({
                success: false,
                code: 'USR_01',
                message: "Error Finding All Users",
                error: (error as Error).message
            })
        }
    },
    UpdateUser: async (req: Request, res: Response): Promise<void> =>{
        try{
            const userId = parseInt(req.params.id)
            const UpdateUserData: Partial<User> = req.body
            const updatedUser = await UserService.UpdateUserServices(userId, UpdateUserData)
            if(!updatedUser){
                res.status(404).json({
                    success: false,
                    code: 'USR_03',
                    message: "User not found"
                })
                return
            }
            res.status(200).json({
                success: true,
                data: updatedUser
            })
        }catch(error: any){
            logger.error(`Error Updating user: ${(error as Error).message}`)
            res.status(500).json({
                success: false,
                code: 'USR_02',
                message: "Error Updating User",
                error: (error as Error).message
            })
        }
    },
    DeleteUser: async(req: Request, res: Response): Promise<void> =>{
        try{
            const userID = parseInt(req.params.id)
            const isdeleted = await UserService.DeleteUserServices(userID)
            if(!isdeleted){
                res.status(404).json({
                    success: false,
                    code: 'USR_05', 
                    message: "User not found"
                })
                return  
            }
            res.status(200).json({
                success: true,
                message: "User deleted successfully"
            })
        }catch(error: any){
            logger.error(`Error Deleting user: ${(error as Error).message}`)
            res.status(500).json({
                success: false,
                code: 'USR_04',
                message: "Error Deleting User",
                error: (error as Error).message
            })
        }
    }
}

export default UserController