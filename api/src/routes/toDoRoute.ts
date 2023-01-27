import { Router } from 'express'
import {
  getToDoItem,
  addToDoItem,
  updateToDoItem,
  deleteToDoItem,
} from '../controllers/toDoController'

const toDoRouter = Router()

toDoRouter.route('/')
  .get(getToDoItem)
  .post(addToDoItem)
  .put(updateToDoItem)
  .delete(deleteToDoItem)

export default toDoRouter
