import { Request, Response, NextFunction } from 'express'
import validateUser from '../utils/userValidation'
import { IUser } from '../models/IUser'
import isUserAuthentic from '../services/authService'

export const login = async function (req: Request, res: Response, next: NextFunction) {
  const { body } = req
  const { error, value } = validateUser(body)
  const user: IUser = value

  if (error) {
    res.send(error)
    return
  }

  const userAuthenticated = await isUserAuthentic(user)
  if (!userAuthenticated) {
    res.send('User or password are incorrect')
    return
  }

  res.redirect('/todo')
}

export const logout = async function (req: Request, res: Response, next: NextFunction) {
  next()
  res.send('Logout')
}
