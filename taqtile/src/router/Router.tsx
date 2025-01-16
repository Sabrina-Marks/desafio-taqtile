import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login.tsx';
import Users from '../pages/Users/Users.tsx';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:'/users',
    element: <Users />
  }
])

export default router
