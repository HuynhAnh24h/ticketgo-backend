import pool from "../configs/database.config"
import { logger } from "../utils/Logger.util"

//     id: number,
//     name: string,
//     code: string,
//     location: string,
//     phone?: string,
//     email?: string,
//     manager?: string,
//     created_at?: Date

export const CreateTableHub = async () =>{
    const query = `
        CREATE TABLE IF NOT EXISTS hubs (
            
        
        )
    `
}