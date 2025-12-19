import { Router } from "express"
import UserController from "../controllers/User.controller"

const router = Router()

router.post("/", UserController.CreateUser)
router.get("/", UserController.FindAllUsers)

export default router