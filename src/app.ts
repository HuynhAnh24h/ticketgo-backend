// Node modules
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// Custom modules
import { connectDB } from './configs/databse.config'
import { logger } from './utils/Logger.util'
import ENV from './configs/env.config'


const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Connect Database
connectDB()



app.listen(ENV.PORT, () => {
    logger.info(`Server is running on port ${ENV.PORT} in ${ENV.NODE_ENV} mode`)
})

export default app