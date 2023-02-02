import { Request, Response, NextFunction } from 'express'
import registerUser from '../services/userService'
import validateUser from '../utils/userValidation'
import { IUser } from '../models/IUser'

const register = async function (req: Request, res: Response, next: NextFunction) {
  const { body } = req
  const { error, value } = validateUser(body)

  if (error) {
    console.log(error)
    next()
    return
  }

  const user: IUser = value as IUser
  registerUser(user)
  res.json(value)
}

export default register
