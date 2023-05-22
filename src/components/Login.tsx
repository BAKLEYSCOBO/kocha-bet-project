import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

const Login: React.FC = () => {
  const { login, isAuthenticated, logout } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state variable

  const handleLogin = () => {
    login(phoneNumber, pinCode);
    setIsLoggedIn(true); // Set login status to true after successful login
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false); // Set login status to false after logout
  };

//   if (isLoggedIn) {
//     return (
//       <div>
//         <h1>Welcome to the dashboard</h1>
//         <button onClick={handleLogout}>Logout</button> {/* Add a logout button */}
//       </div>
//     );
//   }

  return (
    <div className='registration-container'>
      <h2>Login</h2>
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="pinCode">PIN Code:</label>
      <input
        type="password"
        id="pinCode"
        placeholder="Enter your PIN code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
