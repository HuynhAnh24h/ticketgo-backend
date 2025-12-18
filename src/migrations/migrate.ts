import pool from "../configs/databse.config"

import { CreateUserTable } from "../database/User.database"
import { logger } from "../utils/Logger.util"

const migrtate = async () => {
    try{
        await CreateUserTable()
        logger.info("Database migration completed successfully")
    }catch(error){
        logger.error("Database migration failed")
        logger.error((error as Error).message)
    }
}
migrtate()