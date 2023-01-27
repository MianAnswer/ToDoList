import { Request, Response, NextFunction } from 'express'
import {
  getItem,
  addItem,
  updateItem,
  deleteItem,
} from '../services/toDoService'

export const getToDoItem = async function (req: Request, res: Response, next: NextFunction) {
  getItem()
  res.send('Get ToDo Item')
}

export const addToDoItem = async function (req: Request, res: Response, next: NextFunction) {
  addItem()
  res.send('Add ToDo Item')
}

export const updateToDoItem = async function (req: Request, res: Response, next: NextFunction) {
  updateItem()
  res.send('Update ToDo Item')
}

export const deleteToDoItem = async function (req: Request, res: Response, next: NextFunction) {
  deleteItem()
  res.send('Delete ToDo Item')
}
