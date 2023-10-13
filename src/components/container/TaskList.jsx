import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/Task.jsx';


const TaskListComponent = () => {
  
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
  
  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
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
      <h1>
        Your Tasks:
      </h1>
      {
        // TODO: Aplica un map para repetir
      }
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};


export default TaskListComponent;
