// imports
import { combineReducers } from 'redux';
import todosReducer from './todos';

const rootReducer = combineReducers({ // Combine multiple reducers into a single reducer
  todos: todosReducer,
});

export default rootReducer;
