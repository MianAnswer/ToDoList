import { Router } from 'express'
import toDoRouter from './toDoRoute'

const router = Router()
router.use(toDoRouter)

export default router
