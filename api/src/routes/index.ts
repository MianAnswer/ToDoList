import { Router } from 'express'
import toDoRouter from './toDoRoute'
import userRouter from './userRoute'

const router = Router()

router.use('/todo', toDoRouter)
router.use('/user', userRouter)

export default router
