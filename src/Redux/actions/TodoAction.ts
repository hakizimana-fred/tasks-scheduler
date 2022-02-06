import { Dispatch } from 'redux'
import { ADD_TODO, DELETE_TODO } from './constants'

export const addTodo = (task: object) => ({
  type: ADD_TODO,
  payload: task
})
export const deletedTodo = (id: string) => ({
  type: DELETE_TODO,
  payload: id
})

export const todoAdded = (task: object) => (dispatch: Dispatch) => dispatch(addTodo(task))
export const deleteTodo = (id: string) => (dispatch: Dispatch) => dispatch(deletedTodo(id))
