import { Router } from 'express'
import toDoRouter from './toDoRoute'
import registerRouter from './userRoute'

const router = Router()

router.use('/todo', toDoRouter)
router.use('/register', registerRouter)

export default router
