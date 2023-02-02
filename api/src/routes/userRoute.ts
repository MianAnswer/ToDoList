import { Router } from 'express'
import register from '../controllers/userController'

const registerRouter = Router()

registerRouter.route('/')
  .post(register)

export default registerRouter
