import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task.jsx';


//importamos la hoja de estilos task.scss
import '../../styles/task.scss';
import TaskForm from '../pure/forms/TaskForm';

const TaskListComponent = () => {
  
  const defaultTask1 = new Task('Example1', 'Default description 1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Default description 2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Default description 3', false, LEVELS.BLOCKING);
  
  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Contorl del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified')
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => {
      console.log('Task List Component is going to unmount')
    };
  }, [tasks]);

  function completeTask ( task ) {
    console.log('Complete task: ', task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks[index].completed = !tempTasks[index].completed

    setTasks(tempTasks)
  }

  function deleteTask ( task ) {
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice( index, 1 )
    setTasks(tempTasks)
  }

  function addTask ( task ) {
    const tempTasks = [...tasks, task]
    setTasks(tempTasks)
  }

  const taskTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/**TODO iterar sobre una lista de tareas */}
          { tasks.map( (task, index) => (
            <TaskComponent
              key={index}
              task={task}
              complete={completeTask}
              deleteTask={deleteTask}
            >
            </TaskComponent>
          ))}
        </tbody>
      </table>
    )
  }
  
  const loadingStyle = {
    color: 'gray',
    fontSize: '30px',
    fontWeight: 'bold',
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/*Card Header {title}*/}
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          {/*Card Body {content}*/}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            { loading ? ( <p style={loadingStyle}>Loading...</p> ) : taskTable() }
          </div>
          <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
      </div>
      
    </div>
  );
};


export default TaskListComponent;
