import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (phone_number: string, pass_phrase: string) => void;
  register: (
    player_name: string,
    phone_number: string,
    email_address: string,
    pass_phrase: string
  ) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (phone_number: string, pass_phrase: string) => {
    try {
      const response = await fetch(
        'https://demo.kochakitaa.co.tz/api/v1/auth/loginGamePlayer',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': '49aaa4f4-eb3a-42d6-b8ac-349c65fd8182'
          },
          credentials: 'include', // Include cookies in the request
          body: JSON.stringify({
            phone_number,
            pass_phrase,
          }),
        }
      );

      if (response.ok) {
        setIsAuthenticated(true);
        console.log("created")
        alert('You have logged in successfully!');
        return (
          <div>
              Welcome to the dashbord
          </div>
        )
      } else {
        // Handle login error
        console.log('Login failed');
      }
    } catch (error) {
      // Handle network error
      console.log('Login failed');
    }
  };

  const register = async (
    player_name: string,
    phone_number: string,
    email_address: string,
    pass_phrase: string
  ) => {
    try {
      const response = await fetch(
        'https://demo.kochakitaa.co.tz/api/v1/auth/registerGamePlayer',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Csrf-Token': '49aaa4f4-eb3a-42d6-b8ac-349c65fd8182'
          },
          credentials: 'include', // Include cookies in the request
          body: JSON.stringify({
            player_name,
            phone_number,
            email_address,
            pass_phrase,
          }),
        }
      );

      if (response.ok) {
        setIsAuthenticated(true);
        alert('Game player created');
      } else {
        // Handle registration error
        console.log('Registration failed');
      }
    } catch (error) {
      // Handle network error
      console.log('Registration failed');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
