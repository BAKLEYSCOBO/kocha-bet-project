import React, { useState } from 'react';
import Registration from './Registration';
import Login from './Login';
import { useAuth } from '../context/authContext';

type HeaderProps = {
  logo: string;
};

const Header = ({ logo }: HeaderProps) => {
  const { logout } = useAuth()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const handleAuthDialogOpen = () => {
    setIsAuthDialogOpen(true);
  };

  const handleAuthDialogClose = () => {
    setIsAuthDialogOpen(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">How to Play</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleAuthDialogOpen}>Sign Up</button>
            </>
          )}
        </div>
      </header>
      {isAuthDialogOpen && <Registration />}
      {isAuthenticated && <Login />}
    </div>
  );
};

export default Header;
