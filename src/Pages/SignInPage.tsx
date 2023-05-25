import React from 'react';
import SignIn from '../Components/SignIn/SignInComponent';

export const SignInPage = () => {
    return (
        <>
            <SignIn />
        </>
    );
};


// import React from 'react';
// import styled from 'styled-components';
// import '../Components/Common/Font.css';
// import { Colors } from '../Components/Common/Styles';

// export const SignInPage = () => {
//     return (
//         <>
//             <Page>
//                 <TitleWrap>
//                     이메일과 비밀번호를
//                     <br />
//                     입력해주세요.
//                 </TitleWrap>
//                 <ContentWrap>
//                     <InputTitle>
//                         이메일
//                     </InputTitle>
//                     <InputWrap>
//                         <Input />
//                     </InputWrap>
//                     <ErrorMessageWrap>
//                         올바른 이메일을 입력해주세요.
//                     </ErrorMessageWrap>
//                     <InputTitle style={{ marginTop: '25px' }}>
//                         비밀번호
//                     </InputTitle>
//                     <InputWrap>
//                         <Input />
//                     </InputWrap>
//                     <ErrorMessageWrap>
//                     영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
//                     </ErrorMessageWrap>
//                 </ContentWrap>
//                 <div>
//                     <BottomButton>
//                         로그인
//                     </BottomButton>
//                 </div>
//             </Page>
//         </>
//     );
// }


// const Page = styled.div`
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 100%;
//     max-width: 500px;
//     padding: 0 20px;
//     left: 50%;
//     transform: translate(-50%, 0);
//     background-color: ${Colors.s};
//     overflow: hidden;
//     display: flex;
//     flex-direction: column;
// `

// const TitleWrap = styled.div`
//     margin-top: 100px;
//     font-family: 'Logo';
//     font-size: 25px;
//     font-weigth: bold;
// `

// const ContentWrap = styled.div`
//     margin-top: 100px;
//     flex: 1;
// `

// const InputTitle = styled.div`
//     font-family: 'Text';
//     font-size: 12px;
//     font-weight: bold;
// `


// const InputWrap = styled.div`
//     display: flex;
//     border-radius: 10px;
//     padding: 15px;
//     margin-top: 10px;
//     background-color: ${Colors.w};
//     border: 1px solid ${Colors.b};

//     &:focus-within {
//         border: 1px solid ${Colors.sub};
//     }
// `

// const Input = styled.input`
//     width: 100%;
//     outline: none;
//     border: none;
//     height: 18px;
//     font-size: 14px;
//     font-weight: 400;

//     .Input::placehoder {
//         color: ${Colors.s};
//     }
// `


// const ErrorMessageWrap = styled.div`
//     margin-top: 10px;
//     color: ${Colors.r};
//     font-size: 12px;
// `

// const BottomButton = styled.button`
//     padding: 10px 50px;
//     border: none;
//     border-radius: 300px;
//     font-family: 'Logo';
//     font-weight: bold;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     margin-bottom: 20px;
//     cursor: pointer;

//     &:disabled {
//         background-color: ${Colors.sub};
//         color: ${Colors.w};
//     }
// `

// import React, { useState } from 'react';

// export const SignInPage: React.FC = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     }

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     }

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // 로그인 처리 로직 추가
//     }


//     return (
//         <><h1>로그인</h1>
//             <form onSubmit={handleSubmit}>
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
//                 <button type='submit'>로그인</button>
//             </form>
//         </>
//     )
// }


// import React from 'react';

// export const SignInPage = () => {
//     return (
//         <div>
//             로그인 페이지
//         </div>
//     );
// }
