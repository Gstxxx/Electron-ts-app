import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication token in localStorage or wherever you store it
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return {
    isAuthenticated,
    login: (token: string) => {
      localStorage.setItem('authToken', token);
      setIsAuthenticated(true);
    },
    logout: () => {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
    }
  };
}; 