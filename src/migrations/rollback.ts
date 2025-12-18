import pool from "../configs/databse.config"

import { DropUserTable } from "../database/User.database"
import { logger } from "../utils/Logger.util"

const rollback = async () => {
    try{
        await DropUserTable()
        logger.info("Database rollback completed successfully")
    }catch(error){
        logger.error("Database rollback failed")
        logger.error((error as Error).message)
    }
}
rollback()