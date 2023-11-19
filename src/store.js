import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './redux/reducers/todos'; // Import your todo reducer

// Define your rootReducer by combining individual reducers
const rootReducer = {
  todos: todosReducer,
  // Add other reducers here if needed
};

// Create the store using configureStore and pass in the rootReducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;
