import { combineReducers } from 'redux'
import useReducer from './reducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  user: useReducer,

});

export default rootReducer