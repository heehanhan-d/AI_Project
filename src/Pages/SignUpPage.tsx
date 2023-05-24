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


import React from 'react';
import { SignUp } from '../Components/SignUp/SignUp';

export const SignUpPage = () => {
    return (
        <div>
            회원가입 페이지
            <SignUp />
        </div>
    );
}
