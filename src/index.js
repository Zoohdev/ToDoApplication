import React from 'react'
import ReactDOM  from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'


// create a root access instance to render React application
const root = ReactDOM.createRoot(document.getElementById('root')) // document.getElemntbyid gets HTML element with id 'root' from DOM

root.render( // wrap application with 'provider' component from react-redux
  <Provider store={store}> 
    <App />
  </Provider>
)