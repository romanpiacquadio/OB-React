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
    setLoading(false)
    return () => {
      console.log('Task List Component is going to unmount')
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('todo')
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
                    task={task}>
                  </TaskComponent>
                ))}
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      </div>
      
    </div>
  );
};


export default TaskListComponent;
