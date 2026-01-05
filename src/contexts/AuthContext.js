import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (localStorage)
    const storedUser = localStorage.getItem('optiwealth_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // TODO: Replace with actual API call
      // Simulated login for now
      const mockUser = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : email.includes('dev') ? 'developer' : 'user',
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('optiwealth_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (email, password, name, role = 'user') => {
    try {
      // TODO: Replace with actual API call
      // Simulated signup for now
      const newUser = {
        id: Date.now().toString(),
        email,
        name,
        role,
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('optiwealth_user', JSON.stringify(newUser));
      setUser(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('optiwealth_user');
    setUser(null);
  };

  const updateUserRole = (userId, newRole) => {
    if (user && user.role === 'admin') {
      // Only admin can update roles
      const updatedUser = { ...user, role: newRole };
      localStorage.setItem('optiwealth_user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true };
    }
    return { success: false, error: 'Unauthorized' };
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    updateUserRole,
    isAdmin: user?.role === 'admin',
    isDeveloper: user?.role === 'developer',
    isCollaborator: user?.role === 'collaborator'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
