import './App.css'; //import Css from App.css file to apply to wrapper
import React from 'react'

import ToDoWrapper from './components/ToDoWrapper'

//Declare functional component 
const App = () => {
  
  //Define what the component will render
  return (
    <div>
      <h1>It's Time To Work! 
      <span className="icon">📝</span>
     </h1>
      <ToDoWrapper />
    </div>
  )
}

export default App //export statement 





