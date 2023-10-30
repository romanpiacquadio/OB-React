import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const HomePage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  console.log('path', location.pathname)

  const navigateProps = (path) => {
    navigate({
      pathname: path,
      search: '?online=true',
      state: {
        online: true,
      },
    });
  }


  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => navigateProps('/online-state')}>
        Go to Page with State / Query Params
      </button>
      <button onClick={() => navigate('/profile')}>
        Go to Profile
      </button>
    </div>
  )
}

export default HomePage