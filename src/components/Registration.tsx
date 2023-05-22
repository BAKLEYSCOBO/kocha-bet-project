import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import Login from './Login'; // Import the Login component

const Registration: React.FC = () => {
  const { register } = useAuth();
  const [displayName, setDisplayName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [confirmPinCode, setConfirmPinCode] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state variable

  const handleRegister = () => {
    // Additional validation can be added here before calling the register function
    register(displayName, phoneNumber, email, pinCode);
    setIsRegistered(true); // Set registration status to true after successful registration
  };

  if (isRegistered) {
    return <Login />; // Render the Login component after successful registration
  }

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <label htmlFor="displayName">Display Name:</label>
      <input
        type="text"
        id="displayName"
        placeholder="Enter your display name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="pinCode">PIN Code:</label>
      <input
        type="password"
        id="pinCode"
        placeholder="Enter a PIN code (6 characters)"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />

      <label htmlFor="confirmPinCode">Confirm PIN Code:</label>
      <input
        type="password"
        id="confirmPinCode"
        placeholder="Confirm the PIN code"
        value={confirmPinCode}
        onChange={(e) => setConfirmPinCode(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
