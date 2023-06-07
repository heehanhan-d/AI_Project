import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, HeaderLinkStyle } from '../Common/Styles';
import { ADMIN_PATH, BackServer, MAIN_PATH, MYPAGE_PATH } from '../Common/Path';
import axios, { AxiosError } from 'axios';
import { User } from '../Common/Interface';
import { Link } from 'react-router-dom';
import { FormManagement } from '../Admin/FormManagementComponent';


export default function AdminSignIn() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSignin = async (event: any) => {
      event.preventDefault();
    
      // 폼 데이터 가져오기
      const formData = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log('formData:', formData);

    try {
      // 서버에 POST 요청 보내기
      const response = await axios.post(`${BackServer}/auth/users/sign-in`, formData);
      // const response = await axios.post('http://kdt-ai6-team07.elicecoding.com:3001/auth/users/sign-in', formData);

      // 응답 처리
      const { data, isAdmin } = response.data;
      console.log('response.data:', response.data);
      console.log('token:', response.data.data);

      setResponseData(data);

      // 로그인 성공 시 처리
      if (data) {
        // 토큰을 로컬 스토리지에 저장
        const token = response.data.data
        localStorage.setItem('token', token);
        console.log('localStorage:', localStorage.getItem('token'));

        // 이메일을 로컬 스토리지에 저장
        const email = formData.email;
        localStorage.setItem('email', email);

        // @ 앞부분을 추출해서 유저 닉네임으로 설정
        const nickname = email.split('@')[0];

        // 유저 닉네임을 로컬 스토리지에 저장
        localStorage.setItem('nickname', nickname);
      
        // 관리자 로그인 성공 시
        if (isAdmin) {
          setIsAdmin(true);
          window.location.href = ADMIN_PATH;
        } else {
          // 유저 로그인 성공 시
          setIsLoggedIn(true);
          window.location.href = MYPAGE_PATH;
        }
      } else {
        alert('이메일과 비밀번호를 다시 확인해주세요.')
        }
      } catch (e) {
        // 오류 처리
        const error = e as AxiosError;
        console.error(error.response?.data || error.message);
    }
}; 

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // }

  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // }

  return (
    <>
      <FormDiv>
        <FormContainer>
          <form onSubmit={handleSignin}>
            <FormGroup>
              <Label htmlFor="email">이메일</Label>
              <Input type="email" id="email" placeholder='관리자 이메일' required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">비밀번호</Label>
              <Input type="password" id="password" placeholder='관리자 비밀 번호' required />
            </FormGroup>
            <Button type="submit">You, if 을 관리하기</Button>
          </form>
        </FormContainer>
      </FormDiv>
    </>
  );
}
  
const FormDiv = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: auto;
    color: ${Colors.b};
    background-color: ${Colors.sub};
    border: 10px solid ${Colors.sub};
    border-radius: 30px;
    padding: 30px 0 30px 0;
    margin: 150px auto;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Logo';
  font-size: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label<any>`
  margin-bottom: 0.5rem;
`;

const Input = styled.input<{ type: string, id: string, required: boolean, placeholder: string }>`
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Text';
  font-size: 20px;
`;

const Button = styled.button<any>`
  padding: 10px 50px;
  background-color: ${Colors.footer};
  color: ${Colors.w};
  border: none;
  border-radius: 300px;
  cursor: pointer;
  font-family: 'Logo';
  font-size: 20px;
  margin-top: 20px;
  top: -200px;
`;
