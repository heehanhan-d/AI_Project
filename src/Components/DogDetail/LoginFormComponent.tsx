import React from 'react';
import styled from 'styled-components';
import '../Common/Font.css';
import { Button, Colors } from '../Common/Styles';

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
        <>
            <Form>
                <InputContainer>
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailChange} placeholder="이메일"
                            style={{
                            padding: '3px',
                            border: 'none',
                            outline: 'none',
                            fontFamily: 'Text',
                            fontSize: '15pt',
                            }}
                        />
                </InputContainer>
                <InputContainer>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange} placeholder="비밀번호"
                            style={{
                            padding: '3px',
                            border: 'none',
                            outline: 'none',
                            fontFamily: 'Text',
                            fontSize: '15pt',
                            }}
                        />
                </InputContainer>
            </Form>
            <ButtonDiv>
                <SubmitButton type="submit" onClick={handleLogin}>로그인</SubmitButton>
                <CloseButton onClick={handleClose}>닫기</CloseButton>
            </ButtonDiv>
    </>
  );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`

const InputContainer = styled.div`
    padding: 1px;
    background-color: ${Colors.w};
    border: 2px solid ${Colors.g};
    border-radius: 30px;
    margin: 5px;
`

const ButtonDiv = styled.div`
    display: flex;
`

const SubmitButton = styled(Button)`
    margin: 20px 5px 0 70px;
    padding: 10px 35px;
    border: 2px solid ${Colors.main};
    border-radius: 30px;
    background-color: ${Colors.main};
    font-family: 'Logo';
`

const CloseButton = styled(Button)`
    margin: 20px 50px 0 10px;
    padding: 10px 40px;
    border: 2px solid ${Colors.s};
    border-radius: 30px;
    background-color: ${Colors.s};
    font-family: 'Logo';
`
