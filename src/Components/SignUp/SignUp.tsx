import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';


export const SignUp = () => {
  // 회원가입 폼 필드의 상태와 유효성 검사 에러 메시지 상태 정의
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // 회원가입 폼 제출 핸들러
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // 유효성 검사
    if (!name || !email || !password || !confirmPassword) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // API 요청 로직
    // 회원가입 성공 또는 실패에 대한 처리
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            <label htmlFor="name">이름:</label>
          </Label>
          <Input>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event: any) => setName(event.target.value)}
              />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>
            <label htmlFor="email">이메일:</label>
          </Label>
          <Input>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event: any) => setEmail(event.target.value)}
              />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>
            <label htmlFor="password">비밀번호:</label>
          </Label>
          <Input>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event: any) => setPassword(event.target.value)}
              />
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>
            <label htmlFor="confirmPassword">비밀번호 확인:</label>
          </Label>
          <Input>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event: any) => setConfirmPassword(event.target.value)}
            />
          </Input>
        </FormGroup>
        {error && <div>{error}</div>}
        <Button>
          <button type="submit">회원가입</button>
        </Button>
      </form>
    </FormContainer>
  );
};


// 스타일 컴포넌트 정의
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Logo';
  font-size: 20px;
  margin-bottom: 100px;
  color: ${Colors.main};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Text';
  font-size: 20px;
`;

const Button = styled.button`
  padding: 10px 50px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Logo';
  font-size: 20px;
  margin-top: 50px;
`;






// import React, { useState, useEffect, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import styled from 'styled-components';
// import { Body } from '../Common/Layout';
// import { CenterRef, ScrollRef } from '../Common/Ref';
// import { SignUpFormProps } from '../Common/Interface';
// import { Colors } from '../Common/Styles';

// export const SignUpForm: React.FC<SignUpFormProps> = (props: SignUpFormProps): JSX.Element => {
//   // 회원가입 폼 필드의 상태와 유효성 검사 에러 메시지 상태 정의
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   // 회원가입 폼 제출 핸들러
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
  
//   // 유효성 검사
//   if (!email || !password || !confirmPassword) {
//     setError('모든 필드를 입력해주세요.');
//     return;
//   }

//   if (password !== confirmPassword) {
//     setError('비밀번호가 일치하지 않습니다.');
//     return;
//   }

//   // API 요청 로직
//   // 회원가입 성공 또는 실패에 대한 처리
// };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor='name'>이름:</label>
//           <input
//             type='text'
//             id='name'
//             value={'name'}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor='email'>이메일:</label>
//           <input
//             type='text'
//             id='email'
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor='password'>비밀번호:</label>
//           <input
//             type='text'
//             id='password'
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor='confirmPassword'>비밀번호 확인:</label>
//           <input
//             type='text'
//             id='confirmPassword'
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//           />
//         </div>
//         {error && <div>{error}</div>}
//         <button type='submit'>회원가입</button>
//         </form>
//     </>
//   );
// };



// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-family: 'Logo';
//   font-size: 20px;
//   margin-bottom: 100px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;
// `;

// const Label = styled.label<any>`
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input<{ type: string, id: string, required: boolean}>`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   font-family: 'Text';
//   font-size: 20px;
// `;

// const Button = styled.button<any>`
//   padding: 10px 50px;
//   background-color: ${Colors.footer};
//   color: ${Colors.w};
//   border: none;
//   border-radius: 300px;
//   cursor: pointer;
//   font-family: 'Logo';
//   font-size: 20px;
//   margin-top: 50px;
// `;

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






// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { SignUpFormProps } from '../Common/Interface';

// export const SignUpForm: React.FC = () => {

//   const { register, handleSubmit, errors } = useForm<SignUpFormProps>();

//   const onSubmit = (data: SignUpFormProps) => {
//     console.log(data);
//   }

//   return (
//     <> 회원가입 폼
//       <form onSubmit={handleSubmit(onSubmit)} />
//       <div>
//         <label>이름</label>
//         <input
//           type="text"
//           name=
//         />
//       </div>
//     </>
//   )
// }







// export default function SignUpForm() {
    
//     const [isModalOpen, setModalOpen] = useState(false);

//     const handleSubmit = (event: any) => {
      
//       setModalOpen(true);
//         event.preventDefault();
//       // 폼 데이터 처리 로직 추가
//     };
    
//     const closeModal = () => {
//       setModalOpen(false);
//       window.scrollTo(0, 0);
//       };
  
//     return (
//       <FormContainer>
//         <form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="name">이름</Label>
//             <Input type="text" id="name" required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="email">이메일</Label>
//             <Input type="email" id="email" required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="password">비밀번호</Label>
//             <Input type="password" id="password" required />
//           </FormGroup>
//           <FormGroup>
//             <Label htmlFor="ConfirmPassword">비밀번호 확인</Label>
//             <Input type="ConfirmPassword" id="ConfirmPassword" required />
//           </FormGroup>
//         <FormGroup>
//             <Label htmlFor="phone">전화번호</Label>
//             <Input type="phone" id="phone" required />
//           </FormGroup>
//           <Button type="submit">회원 가입</Button>
//             </form>
//         {isModalOpen && (
//         <Modal>
//             <CenterRef>
//             <ModalContent>
//                 <h1>회원 가입이 완료되었습니다</h1><br />
//               <p>You, If을 통해 Underdog들을 만나보세요.</p>
//               <ModalButton onClick={closeModal}>닫기</ModalButton>
//             </ModalContent>
//               </CenterRef>
//         </Modal>
//       )}
//       </FormContainer>
//     );
//   }
  













// import React, { useState, useEffect, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import styled from 'styled-components';
// import { Body } from '../Common/Layout';
// import { CenterRef, ScrollRef } from '../Common/Ref';
// import { SignUpFormProps } from '../Common/Interface';
// import { Colors } from '../Common/Styles';

// export const SignUpForm = (props: any) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues
//   } = useForm<SignUpFormProps>({ mode: 'onChange' });
// };
