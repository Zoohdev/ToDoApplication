// Import the createSlice function from the redux toolkit library
import { createSlice } from '@reduxjs/toolkit'

// Creating a slice for the counter with initial state and reducer functions.
export const counterSlice = createSlice({
  // Name of the slice, used in the state structure.
  name: 'counter',
  
  // Initial state of the counter slice.
  initialState: {
    value: 0,
  },
  
  // Reducer functions that handle state changes
  reducers: {
    // increment the counter value by 1.
    increment: (state) => {
      
      state.value += 1 // Mutate the state by decrementing the 'value' property by 1
    },
    
    // decrement the counter value by 1
    decrement: (state) => {
      
      state.value -= 1
    },
    
    // incremente the counter value by a specified amount.
    incrementByAmount: (state, action) => {
      // Mutate the state by incrementing the 'value' property by  payload amount
      state.value += action.payload
    },
  },
})

// Extract action creators from the created slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions


export default counterSlice.reducer
