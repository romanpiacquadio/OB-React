import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log('path', location.pathname)

  const handleNavigate = (path) => {
    navigate(path)
  }

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  return (
    <div>
      <h1>
        About | FAQs questions
      </h1>
      <div>
        <button onClick={() => handleNavigate('/')}>
          Go to home
        </button>
        <button onClick={goBack}>
          Go to back
        </button>
        <button onClick={goForward}>
          Go forward
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
