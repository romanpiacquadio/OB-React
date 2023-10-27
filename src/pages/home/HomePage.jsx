import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log('path', location.pathname)

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => handleNavigate('/profile')}>
        Go to Profile
      </button>
    </div>
  )
}

export default HomePage