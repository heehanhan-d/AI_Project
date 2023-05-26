import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { Colors } from '../Common/Styles';
import { AdminPage } from '../../Pages/AdminPage';
import { FormManagement } from './FormManagementComponent';

export default function AdminLogin () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 실제로는 서버에 관리자 로그인 정보를 보내고 검증해야 합니다.
    const adminEmail = 'youif247@gmail.com';
    const adminPassword = 'youif247';

    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };


  return (
    <>
      {isLoggedIn ? (
        <FormManagement />
      ) : (
        <AdminDiv>
            <h1>Admin Login</h1>
            <input type="text" placeholder="Email" value={email} onChange={handleUsernameChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Login</button>
        </AdminDiv>
      )}
    </>
  );
}


const AdminDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 150px auto;
  background-color: ${Colors.s};
`