import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const TaskDetailPage = () => {

  const { id } = useParams();

  return (
    <div>
      <h1>Task Detail - {id}</h1>
    </div>
  );
}

export default TaskDetailPage;
