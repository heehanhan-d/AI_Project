import React from 'react';

export const Logout = () => {
    const handleLogout = () => {
        console.log('localStorage:', localStorage.getItem('token'));
        localStorage.removeItem('token');
        console.log('localStorage:', localStorage.getItem('token'));
  };

  return (
    <div>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

