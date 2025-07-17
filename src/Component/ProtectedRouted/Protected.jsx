import { Navigate } from 'react-router-dom';

export  function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}



export function ProtectedRoute2({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashbord" />;
  }

  return children;
}

export default {ProtectedRoute,ProtectedRoute2}