import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { CenterRef } from '../Common/Ref';
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
    
    // const closeModal = () => {
    //   setModalOpen(false);
    //   window.scrollTo(0, 0);
    //   };
  
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
            {/* {isModalOpen && (
            <Modal>
                <CenterRef>
                <ModalContent>
                    <h1>회원가입이 완료되었습니다!</h1><br />
                <p>로그인 후 You, if 의 서비스를 이용해보세요.</p>
                <ModalButton onClick={closeModal}>로그인 하러 가기</ModalButton>
                </ModalContent>
                </CenterRef>
            </Modal>
        )} */}
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
//   margin-bottom: 100px;
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

// const Modal = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     background-color: ${Colors.w};
//     font-family: "Text";
//     font-size: 20px;
//     bottom: 100px;
//     // margin-top: 200px;
//     // margin-bottom: 250px;
// `;

// const ModalContent = styled.div`
//     background-color: ${Colors.w};
//     padding-bottom: 20px;
//     border-radius: 5px;
// `;


// const ModalButton = styled(Button)`
//     margin-top: 10px;
//     padding: 12px 24px;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-family: "Logo";
//     font-size: 15px;
//     margin-left: auto;
//     margin-right: auto;
// `;