import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundPage = () => {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={ () => handleNavigate('/') }>Go to Home</button>
    </div>
  )
}

export default NotFoundPage