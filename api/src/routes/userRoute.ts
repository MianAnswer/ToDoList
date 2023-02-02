import { Router } from 'express'
import register from '../controllers/userController'

const registerRouter = Router()

registerRouter.route('/register')
  .post(register)

export default registerRouter
