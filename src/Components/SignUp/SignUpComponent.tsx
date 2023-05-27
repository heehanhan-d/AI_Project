import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { CenterRef } from '../Common/Ref';
import { SIGNIN_PATH } from '../Common/Path';
import axios, { AxiosError } from 'axios';
import { User } from '../Common/Interface';
import { Link } from 'react-router-dom';
// import { BackServer, SIGNIN_PATH } from '../Common/Path';

export default function SignUp() {
    
    const [isModalOpen, setModalOpen] = useState(false);
    const [responseData, setResponseData] = useState([]);

    const handleSubmit = async (event: any) => {
      
        setModalOpen(true);
        event.preventDefault();
     
        // 폼 데이터 가져오기
        const formData = {
          username: event.target.username.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
          password: event.target.password.value
        };

        try {
          // 서버에 POST 요청 보내기
          const response = await axios.post('http://localhost:3001/auth/users/sign-up', formData);
          // const response = await axios.post('http://kdt-ai6-team07.elicecoding.com:3001/auth/users/sign-up', formData);

          // 응답 처리
            // console.log(response.data);
            const responseData = response.data;
            // console.log(responseData);
        
            setResponseData(responseData);

        } catch (e) {
          // 오류 처리
          const error = e as AxiosError;
          console.error(error.response?.data || error.message);
        }
    }; 
    
    const closeModal = () => {
      setModalOpen(false);
      window.scrollTo(0, 0);
  };
  
    return (
        <FormDiv>
            <FormContainer>
                <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="username">이름</Label>
                <Input type="text" id="username" required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="phone">전화번호</Label>
                <Input type="phone" id="phone" required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email">이메일</Label>
                <Input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">비밀번호</Label>
                <Input type="password" id="password" required />
            </FormGroup>
            <Button type="submit">You, if 의 회원 되기!</Button>
                </form>
            {isModalOpen && (
            <Modal>
                <CenterRef>
                <ModalContent>
                    <h1>회원가입이 완료되었습니다!</h1><br />
                  <p>로그인 후 You, if 의 서비스를 이용해보세요.</p>
                  <Link to={SIGNIN_PATH}>
                    <ModalButton onClick={closeModal}>로그인 하러 가기</ModalButton>
                  </Link>
                </ModalContent>
                </CenterRef>
            </Modal>
        )}
            </FormContainer>
        </FormDiv>
    );
}
  
const FormDiv = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 515px;
    color: ${Colors.b};
    background-color: ${Colors.w};
    border: 10px solid ${Colors.sub};
    border-radius: 30px;
    padding-bottom: 40px;
    top: 30px;
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

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${Colors.w};
    font-family: "Text";
    font-size: 20px;
    bottom: 100px;
    // margin-top: 200px;
    // margin-bottom: 250px;
`;

const ModalContent = styled.div`
    background-color: ${Colors.w};
    padding-bottom: 20px;
    border-radius: 5px;
`;


const ModalButton = styled(Button)`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${Colors.footer};
    color: ${Colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Logo";
    font-size: 15px;
    margin-left: auto;
    margin-right: auto;
`;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { Colors } from '../Common/Styles';
// import { SignUp } from '../Common/Interface';
// import '../Common/Font.css';

// export default function SignUp() {

//     const navigate = useNavigate();

//     const {
//         register,
//         formState: { errors },
//         handleSubmit,
//         setError
//     } = useForm<SignUp>({ mode: 'onBlur ' });

//     const onValid = (data: SignUp) => {
//         if (data.password !== data.ConfirmPassword) {
//             setError(
//                 'ConfirmPassword',
//                 { message: '비밀번호가 일치하지 않습니다.' },
//                 { shouldFocus: true }
//             );
//         }

//         // 서버 오류 시 에러
//         setError(
//             'extraError',
//             { message: '일시적인 오류로 회원가입이 불가능합니다.' }
//         );
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit(onValid)}>
//                 <Label >
//             </form>
//         </>
//     )
// }

// const SubmitButton = styled.button`
//     display: block;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     padding: 10px 50px;
//     border-radius: 300px;
//     font-family: 'Logo';
//     font-weight; 700;
//     width: 100%;
//     margin: 32px auto 12.8px;
//     cursor: pointer;
// `

// const InputContainer = styled.div`
//     display: flex;
//     align-items: center;
//     border: 1px solid ${Colors.g};
//     border-radius: 300px;
//     height: 45px;
//     padding: 10px 50px;
//     background-color: ${Colors.w};

//     & + label {
//         margin-bottom: 16px;
//     }
// `;

// const Label = styled.label`
//     display: block;
//     font-size: 16px;
//     font-weight: 700;
//     margin-left: 17px;
//     margin-bottom: 8px;

//     & + p {
//         margin-top: 16px;
//     }
// `;

// const Input = styled.input`
//     height: inherit;
//     margin-left: 13px;
//     width: calc(100% - 32px);
// `;

// const ErrorMessage = styled.p`
//     color: ${Colors.r};
//     padding-left: 17px;
//     font-size: 13px;
//     font-weight: 700;

//     div + & {
//         margin: 8px 0 13px;
//     }
// `;

