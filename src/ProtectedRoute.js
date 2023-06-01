import { userData } from 'App';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const { token } = useContext(userData);

  if (token === '') {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
