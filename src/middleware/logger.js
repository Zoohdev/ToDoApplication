const logger = store => next => action => { // define middleware function
    console.group(action.type) // Use console.group method to group log messages related to a specific action type
    console.info('dispatching', action) // Log information about the dispatched action
    let result = next(action) // Call the next middleware in the redux store dispatch function.
   
    console.log('next state', store.getState()) // Log the next state after the action has been processed
    console.groupEnd()   // Close the console group for the action type
    return result
  }
  
  export default logger