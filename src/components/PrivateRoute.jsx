import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; 
import { AuthContext } from './Provider/Authprovider';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
