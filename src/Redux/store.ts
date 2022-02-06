import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import taskReducer from './reducers/taskReducer'

export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)))
