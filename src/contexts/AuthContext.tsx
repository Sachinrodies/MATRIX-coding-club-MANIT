import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type User = {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'admin';
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Mock login function - would connect to backend in real app
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation
      if (email === 'admin@matrix.com' && password === 'password') {
        const userData: User = {
          id: '1',
          username: 'admin',
          email: 'admin@matrix.com',
          role: 'admin'
        };
        
        setUser(userData);
        localStorage.setItem('matrixUser', JSON.stringify(userData));
      } else if (email === 'user@example.com' && password === 'password') {
        const userData: User = {
          id: '2',
          username: 'testuser',
          email: 'user@example.com',
          role: 'student'
        };
        
        setUser(userData);
        localStorage.setItem('matrixUser', JSON.stringify(userData));
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };
  
  // Mock register function
  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation
      if (!username || !email || !password) {
        throw new Error('All fields are required');
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }
      
      const userData: User = {
        id: Date.now().toString(),
        username,
        email,
        role: 'student'
      };
      
      setUser(userData);
      localStorage.setItem('matrixUser', JSON.stringify(userData));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('matrixUser');
  };
  
  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('matrixUser');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (err) {
          // If JSON parsing fails, clear localStorage
          localStorage.removeItem('matrixUser');
        }
      }
      setIsLoading(false);
    };
    
    loadUser();
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};