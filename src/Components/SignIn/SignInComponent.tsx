import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, HeaderLinkStyle } from '../Common/Styles';
import { ADMIN_PATH, LIST_PATH, MYPAGE_PATH, SIGNIN_PATH } from '../Common/Path';
import axios, { AxiosError } from 'axios';
import { User } from '../Common/Interface';
import { Link } from 'react-router-dom';
import { FormManagement } from '../Admin/FormManagementComponent';


export default function SignIn() {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseData, setResponseData] = useState({});

  const handleSignin = async (event: any) => {
      event.preventDefault();
    
      // 폼 데이터 가져오기
      const formData = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log(formData);

    const mockData = [
        {
          email: 'underdog247@gmail.com',
          password: 'underdog247',
          role: 'user',
          token: 'mockTocken123'
        },
        {
        email: 'youif247@gmail.com',
        password: 'youif247',
        role: 'admin',
        token: 'mockTocken456'
        }
      ]
    
      try {
        // 서버에 POST 요청 보내기
        // const response = await axios.post('http://kdt-ai6-team07.elicecoding.com:3001/users/sign-in', formData);

        // // 목업 데이터를 사용해서 테스트 하기
        const response = {
          data: mockData
        };

        // 응답 처리
          const responseData = response.data;
          console.log(responseData);
      
          setResponseData(responseData);

        // 로그인 성공 시 처리
        const loggedIn = responseData.find((data: any) => data.email === formData.email && data.password === formData.password);
        if (loggedIn) {
          const token = loggedIn.token;
        
          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('token', token);

          // 관리자 로그인 성공 시
          if (loggedIn.role === 'admin') {
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
              <Input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">비밀번호</Label>
              <Input type="password" id="password" required />
            </FormGroup>
            <Button type="submit">You, if 에 로그인 하기</Button>
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
    background-color: ${Colors.w};
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

const Input = styled.input<{ type: string, id: string, required: boolean }>`
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Text';
  font-size: 20px;
`;

const Button = styled.button<any>`
  padding: 10px 50px;
  background-color: ${Colors.main};
  color: ${Colors.w};
  border: none;
  border-radius: 300px;
  cursor: pointer;
  font-family: 'Logo';
  font-size: 20px;
  margin-top: 20px;
  top: -200px;
`;

const HeaderLink = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 100px 100px;
    background-color: ${Colors.main};
    height: 40px;
    justify-content: end;
    text-align: start;
`
