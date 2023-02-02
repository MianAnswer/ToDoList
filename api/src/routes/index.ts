import { Router } from 'express'
import toDoRouter from './toDoRoute'
import registerRouter from './userRoute'

const router = Router()

router.use([
  toDoRouter,
  registerRouter,
])

export default router
