import React from 'react';

export const LoginForm = ({ email, password, setEmail, setPassword, onLogin, onClose }: any) => {
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    onLogin();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <form>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
      <button type="submit" onClick={handleLogin}>로그인</button>
      <button onClick={handleClose}>닫기</button>
    </form>
  );
};

