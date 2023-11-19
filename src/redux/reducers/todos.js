// import action types from types.js file in actions folder
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

// set an empty array
const initialState = [];

// Declare reducer function to handle state changes based on actions
const todosReducer = (state = initialState, action) => {
  // Set switch statement to handle different action types
  switch (action.type) {
    // Case statements for adding a new to-do actions 
    case ADD_TODO:
      // create a new array with the existing todos and new one
      return [...state, { id: Date.now(), text: action.payload.text, completed: false }];

    
    case TOGGLE_TODO:
      // map function to create a new array, toggling the completed status of the to-do
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );

    
    case DELETE_TODO:
      // filter function to create a new array excluding the todo with the specific id.
      return state.filter(todo => todo.id !== action.payload.id);

    // Default case to handle unknown action types.
    default:
      // If the action type is not recognised, return the current state unchanged
      return state;
  }
};


export default todosReducer;

