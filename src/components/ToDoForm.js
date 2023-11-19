import React, { useState } from 'react'; // import React library and useState hooks
import './ToDoForm.css'; // import CSS to apply on form

const ToDoForm = ({ onSubmit }) => { // Declare component called ToDoForm that takes on onSubmit prop
  const [inputValue, setInputValue] = useState(''); // create a state variable and initialize it with an empty string

  const handleChange = (e) => { // Set function handleChange as an event handler for onChange event of the input field
    setInputValue(e.target.value); // Set input value to update the input field with any current value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //set function to prevent default form submission and reset value to empty string
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className="ToDoForm gradient-background">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your task"
      />
      <button type="submit" className="button-highlight">
      Add Task :) </button>
    </form>
    </div>
  );
};

export default ToDoForm;
