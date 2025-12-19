import pool from "../configs/database.config"
import { logger } from "../utils/Logger.util"

export const CreateUserTable = async () =>{
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(50) DEFAULT 'user',
            address TEXT,
            phone VARCHAR(20),
            hub VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `
    try{
        await pool.query(query)
        logger.info("User table created or already exists")
    }catch(error){
        logger.error("Error creating User table")
        logger.error((error as Error).message)
    }
}

export const DropUserTable = async () =>{
    const query = `DROP TABLE IF EXISTS users`
    try{
        await pool.query(query)
        logger.info("User table dropped successfully")
    }catch(error){
        logger.error("Error dropping User table")
        logger.error((error as Error).message)
    }   
}