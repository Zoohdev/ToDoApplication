import React, { useState } from 'react';
import './ToDoForm.css';
import ToDoForm from './ToDoForm'; // import form from ToDoForm component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // font import
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'; // import icons for edit and delete buttons

const ToDoWrapper = () => {
  const [tasks, setTasks] = useState([ // define state variables using useState hooks
    { id: 1, text: 'Learn Redux', complete: false }, // array of two tasks each with an id, text and complete property
    { id: 2, text: 'Do Pilates', complete: true },
  ]);


  const handleSubmit = (newTask) => { // update state with a new task everytime the 'handleSubmit" function is called
    setTasks([...tasks, { text: newTask, complete: false }]);
  };

  const handleTaskEdit = (id, newText) => { // funcion updates the tasks and replaces the text with new id and texts
    setTasks((prevTasks) =>
      prevTasks.map((task) => // map over previous task to replace with new tasks
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }; // delete tasks and replace with new tasks with matching ids

  const handleTaskToggle = (index) => { // completion of tasks using specified index
    const updatedTasks = [...tasks];
    console.log('Before:', updatedTasks);

    if (typeof updatedTasks[index] === 'object') { // if statement updates state with changed array
      updatedTasks[index].complete = !updatedTasks[index].complete;
      setTasks(updatedTasks);
    }

    console.log('After:', updatedTasks);
  };

  return (
    <div className='ToDoWrapper'>
      <ToDoForm onSubmit={handleSubmit} />
      <div>
        <h2>Tasks:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleTaskToggle(index)}
              />
              <span style={{ textDecoration: task.complete ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button class="wrap-btn" onClick={() => handleTaskEdit(task.id, prompt('Edit task:', task.text))}>
          <FontAwesomeIcon icon={faEdit} /> {} 
        </button>
        <button class="wrap-btn" onClick={() => handleTaskDelete(task.id)}>
          <FontAwesomeIcon icon={faTrash} /> {}
        </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoWrapper;

