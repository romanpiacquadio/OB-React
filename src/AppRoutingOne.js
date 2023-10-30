import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams } from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/state/StatePage';

function AppRoutingOne() {

  let logged;
  
  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log(logged)
  }, [])

  const taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task',
    },
  ]
  
  const TaskSelector = () => {
    const {id} = useParams();
    return <TaskDetailPage task={taskList[id-1]}/>
  }

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/404'>| Ruta inexistente |</Link>
          <Link to='/login'>| Login |</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/online-state" element={<StatePage />} />
            <Route path="/login" element={!logged ? <LoginPage /> : <Navigate to={'/'} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route path="/profile" element={logged ? <ProfilePage /> : <Navigate to={'/login'} />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route exact path="/task/:id" element={<TaskSelector />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
