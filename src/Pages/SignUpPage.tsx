// import React, { useState } from 'react';
// import axios from 'axios';
// import { BackServer } from '../Components/Common/Path';

// export const SignUpPage: React.FC = () => {

//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');

//     const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPhoneNumber(e.target.value);
//     }

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // 회원가입 처리 로직 추가
//     }

//     // 유효성 검사
//     if (!name || !phoneNumber || !email || !password || !confirmPassword) {
//         setError('회원가입을 위해 입력란을 모두 채워주세요')
//         return;
//     }

//     // 서버와 통신
//     try {
//         const response = await axios.post(`${BackServer}/users/sign-up`, { name, phoneNumber, email, password, confirmPassword }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log('회원가입 성공!');
//     } catch (e) {
//         if (error.response) {
//             setError(error.response.data.error);
//         } else if (error.request) {
//             setError('서버에 연결할 수 없습니다.');
//         } else {
//             setError('알 수 없는 에러가 발생했습니다.');
//         }
//     }
// };
    

//         // try {
//         //     const response = await fetch(`${BackServer}/users/sign-up`, {
//         //         method: 'POST',
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         },
//         //         body: JSON.stringify()
//         //     });

//         //         if (response.ok) {
//         //             console.log('회원가입 성공!');
//         //         } else {
//         //             const data = await response.json();
//         //             console.log('회원가입 실패');
//         //             setError(data.error);
//         //         }
//         //     } catch (e) {
//         //         console.log('서버에 연결할 수 없습니다')
//         //         setError('서버에 연결할 수 없습니다.');
//         //     }

    

//     return (
//         <div><h1>회원가입</h1>
//             {error && <p>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="name">
//                     이름
//                     <input
//                         type="name"
//                         value={name}
//                     />
//                 </label>
//                 <label htmlFor="phoneNumber">
//                     전화번호
//                     <input
//                         type="phoneNumber"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                     />
//                 </label>
//                 <label htmlFor="email">
//                     이메일
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                     />
//                 </label>
//                 <label htmlFor="password">
//                     비밀번호
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                 </label>
//                 <label htmlFor="confirmPassword">
//                     비밀번호 확인
//                     <input
//                         type="confirmPassword"
//                         value={confirmPassword}
//                     />
//                 </label>
//                 <button type='submit'>회원가입</button>
//             </form>
//         </div>
//     );
// };

// import { SignUp } from '../Components/SignUp/SignUp';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import '../Components/Common/Font.css';
// import { Colors } from '../Components/Common/Styles';
// import { BackServer } from '../Components/Common/Path';

// export const SignUpPage = () => {

//     // 유효성 검사
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors, isSubmitting, isDirty, isValid },
//     } = useForm({ mode: 'onChange' });

//     const navigate = useNavigate();

//     // post 요청
//     const onSubmit = data => {
//         console.log(data);
//         fetch(`${BackServer}/users/sign-up`, {
//             method: 'POST',
//             headers: { 'Content-type': 'applicaton/json' },
//             body: JSON.stringify({
//                 name: data.name,
//                 phone: data.phone,
//                 email: data.email,
//                 password: data.password
//             })
//         })
//             .then(res => res.json())
//             .then(() => {
//                 alert('회원가입 완료! 로그인 후 이용해주세요.');
//                 navigate('../sign-in');
//             });
        
//         // 에러 처리
//         const onError = errors => console.log(errors);
//     }

//     return (
//         <>회원가입 페이지
//             <SignUp />
//             <form onSubmit={handleSubmit(onSubmit, onError)}>
//             {/* 이름 에러 핸들링 */}
//                 {errors.name && errors.name?.type === 'required' && (
//                     <AlertMessage>이름을 입력하세요.</AlertMessage>
//                 )}
//                 {errors.name && errors.name?.type === 'minLength' && (
//                     <AlertMessage>{errors.name.message}</AlertMessage>
//                 )}
//                 <Input
//                     id='name'
//                     type='text'
//                     placeholder='이름(실명)을 입력해주세요.'
//                     aria-invalid={errors.name ? `${Colors.r}` : `${Colors.s}`}
//                     {...register('name', {
//                         required: true,
//                         minLength: { value: 2, message: '이름은 2자 이상이어야 합니다.' }
//                     })}
//                 />
//             {/* 전화번호 에러 핸들링 */}
//             {/* 이메일 에러 핸들링 */}
//                 {errors.email && errors.email?.type === 'required' && (
//                     <AlertMessage>이메일을 입력하세요.</AlertMessage>
//                 )}
//                 {errors.email && errors.email?.type === 'pattern' && (
//                     <AlertMessage>{errors.email.message}</AlertMessage>
//                 )}
//                 <Input
//                     id='email'
//                     type='text'
//                     placeholder='이메일을 입력해주세요.'
//                     aria-invalid={errors.email ? `${Colors.r}` : `${Colors.s}`}
//                     {...register('email', {
//                         required: true,
//                         pattern: { value: /@/, message: '이메일 형식에 맞지 않습니다.' }
//                 })}
//                 />
//             {/* 비밀번호 에러 핸들링 */}
                
//             </form>

//         </>
//     );
// }

// const AlertMessage = styled.span`
//     margin-bottom: 5px;
//     color: ${props => props.theme.alert};
//     font-size: ${props => props.theme.fontSize.small};
// `;

// const Input = styled.input`
//     border: 2px solid ${props => props['aria-invalid']};
// `

import React from 'react';
import SignUp  from '../Components/SignUp/SignUpComponent';

export const SignUpPage = () => {
    return (
        <>
            <SignUp />
        </>
    )
}