import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { BackServer } from '../Common/Path';
import axios, { AxiosError } from 'axios';
import { User } from '../Common/Interface';

export default function SignUp() {
    
    // const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);  
    const [responseData, setResponseData] = useState('');

    const handleSubmit = async (event: any) => {
      
        // setModalOpen(true);
        event.preventDefault();
     
        // 폼 데이터 가져오기
        const formData = {
          email: event.target.email.value,
          password: event.target.password.value
        };
        console.log(formData);

        try {
          // 서버에 POST 요청 보내기
          const response = await axios.post(`${BackServer}/users/sign-in`, formData);

          // 응답 처리
            console.log(response.data);
            const responseData = response.data;
            console.log(responseData);
        
            setResponseData(responseData);

        } catch (e) {
          // 오류 처리
          const error = e as AxiosError;
          console.error(error.response?.data || error.message);
        }
    }; 
    
    window.scrollTo(0, 0);
  
    return (
        <FormDiv>
            <FormContainer>
            <form onSubmit={handleSubmit}>
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
