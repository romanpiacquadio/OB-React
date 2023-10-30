import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>Your profile</h1>
      <button onClick={ () => handleNavigate('/tasks')}>Tasks</button>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default ProfilePage;
