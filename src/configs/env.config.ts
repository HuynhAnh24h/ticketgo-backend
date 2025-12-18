// Node modules
import { configDotenv } from "dotenv";

configDotenv()

const ENV ={
    PORT:process.env.PORT || 3000,
    NODE_ENV:process.env.NODE_ENV || 'development',

    PG_HOST:process.env.PG_HOST || 'localhost',
    PG_PORT:process.env.PG_PORT || 5432,
    PG_USER:process.env.PG_USER || 'postgres',
    PG_PASSWORD:process.env.PG_PASSWORD || 'password',
    PG_DATABASE:process.env.PG_DATABASE || 'mydatabase',

    JWT_SECRET:process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN || '1h',

    JWT_ACCESS_SECRET:process.env.JWT_ACCESS_SECRET || 'your_jwt_access_secret',
    JWT_ACCESS_EXPIRES_IN:process.env.JWT_ACCESS_EXPIRES_IN || '15m',

    JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET || 'your_jwt_refresh_secret',
    JWT_REFRESH_EXPIRES_IN:process.env.JWT_REFRESH_EXPIRES_IN || '7d',
}

export default ENV