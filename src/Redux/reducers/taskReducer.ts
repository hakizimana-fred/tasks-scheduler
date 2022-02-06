import { Action } from 'redux'
import { Type } from 'typescript'
import { ADD_TODO, DELETE_TODO } from '../actions/constants'

interface ITasksState {
  tasks: any[];
}

const initialState: ITasksState = {
  tasks: []
}

const taskReducer = (state: ITasksState = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }

    case DELETE_TODO:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)]
      }
    default:
      return state
  }
}

export default taskReducer
