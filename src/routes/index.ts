import Router from 'express'
import UserRoutes from './User.route'
const router = Router()

router.use('/users', UserRoutes)


export default router