// Node modules
import { Pool } from "pg"

// Custom modules
import ENV from "./env.config"
import { logger } from "../utils/Logger.util"

const pool = new Pool({
    host: ENV.PG_HOST,
    user: ENV.PG_USER,
    password: ENV.PG_PASSWORD,
    database: ENV.PG_DATABASE,
    port: Number(ENV.PG_PORT),
})


export default pool

export const connectDB = async () => {
    try {
        await pool.connect()
        logger.info("Database connected successfully")
    } catch (error) {
       logger.error("Database connection failed")
       logger.error((error as Error).message)
       process.exit(1)
    }   
}