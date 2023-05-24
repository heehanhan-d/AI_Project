import React from 'react';

export default function Signup() {
    return (
        <>회원가입</>
    )
}

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// export default function SingUp () {
//     //이름, 이메일, 비밀번호, 비밀번호 확인
//     const [name, setName] = useState<string>('')
//     const [email, setEmail] = useState<string>('')
//     const [password, setPassword] = useState<string>('')
//     const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  
//     //오류메시지 상태저장
//     const [nameMessage, setNameMessage] = useState<string>('')
//     const [emailMessage, setEmailMessage] = useState<string>('')
//     const [passwordMessage, setPasswordMessage] = useState<string>('')
//     const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')
  
//     // 유효성 검사
//     const [isName, setIsName] = useState<boolean>(false)
//     const [isEmail, setIsEmail] = useState<boolean>(false)
//     const [isPassword, setIsPassword] = useState<boolean>(false)
//     const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)
//     const router = useRouter()
  
//     const onSubmit = useCallback(
//       async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         try {
//           await axios
//             .post(REGISTER_USERS_URL, {
//               username: name,
//               password: password,
//               email: email,
//             })
//             .then((res) => {
//               console.log('response:', res)
//               if (res.status === 200) {
//                 router.push('/sign_up/profile_start')
//               }
//             })
//         } catch (err) {
//           console.error(err)
//         }
//       },
//       [email, name, password, router]
//     )
  
//     // 이름
//     const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       setName(e.target.value)
//       if (e.target.value.length < 2 || e.target.value.length > 5) {
//         setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
//         setIsName(false)
//       } else {
//         setNameMessage('올바른 이름 형식입니다 :)')
//         setIsName(true)
//       }
//     }, [])
  
//     // 이메일
//     const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       const emailRegex =
//         /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
//       const emailCurrent = e.target.value
//       setEmail(emailCurrent)
  
//       if (!emailRegex.test(emailCurrent)) {
//         setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
//         setIsEmail(false)
//       } else {
//         setEmailMessage('올바른 이메일 형식이에요 : )')
//         setIsEmail(true)
//       }
//     }, [])
  
//     // 비밀번호
//     const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//       const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
//       const passwordCurrent = e.target.value
//       setPassword(passwordCurrent)
  
//       if (!passwordRegex.test(passwordCurrent)) {
//         setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
//         setIsPassword(false)
//       } else {
//         setPasswordMessage('안전한 비밀번호에요 : )')
//         setIsPassword(true)
//       }
//     }, [])
  
//     // 비밀번호 확인
//     const onChangePasswordConfirm = useCallback(
//       (e: React.ChangeEvent<HTMLInputElement>) => {
//         const passwordConfirmCurrent = e.target.value
//         setPasswordConfirm(passwordConfirmCurrent)
  
//         if (password === passwordConfirmCurrent) {
//           setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
//           setIsPasswordConfirm(true)
//         } else {
//           setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
//           setIsPasswordConfirm(false)
//         }
//       },
//       [password]
//     )
  
//     return (
//       <>
//         <Back />
  
//         <Title title="회원가입" className="loginMt" />
  
//         <form css={selfWrap} onSubmit={onSubmit}>
//           <div className="formbox">
//             <TextField text="이름" type="text" typeName="name" onChange={onChangeName} />
//             {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
//           </div>
  
//           <div className="formbox">
//             <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
//             {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
//           </div>
  
//           <div className="formbox">
//             <PasswordField
//               onChange={onChangePassword}
//               passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
//               title="비밀번호"
//               typeTitle="password"
//             />
//             {password.length > 0 && (
//               <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
//             )}
//           </div>
  
//           <div className="formbox">
//             <PasswordField
//               onChange={onChangePasswordConfirm}
//               passwordText=" "
//               title="비밀번호 확인"
//               typeTitle="passwordConfirm"
//             />
//             {passwordConfirm.length > 0 && (
//               <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
//             )}
//           </div>
  
//           {/* 이름, 이메일, 패스워드, 패스워드 확인이 다 맞다면 주황버튼으로 */}
//           <div css={footButtonWrapper}>
//             <section>
//               <FootButton
//                 type="submit"
//                 footButtonType={FootButtonType.ACTIVATION}
//                 disabled={!(isName && isEmail && isPassword && isPasswordConfirm)}
//               >
//                 다음
//               </FootButton>
//             </section>
//           </div>
//         </form>
//       </>
//     )
//   }
  




// import React, { FC, useEffect, useRef } from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import styled from "styled-components";
// import { FormValue } from '../Common/Interface';

// export const SignupForm: FC = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors }
//     } = useForm<FormValue>();

//     // 비밀번호와 비밀번호 확인이 일치하는지 검증하기 위해 'password' input의 value를 추적
//     const passwordRef = useRef<string | null>(null);
//     passwordRef.current = watch('password');
    
//     const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
//         console.log(data);
//     }

//   return (
//     <><p>회원가입</p>
//         <form onSubmit={handleSubmit(onSubmitHandler)}>
//               <label htmlFor="name">이름</label>      
//               <input
//                   {...register('name', { required: true, minLength: 2 })} />
//               {errors.name && errors.name.type === 'required' && (
//                   <div>이름을 입력해주세요!</div>
//               )}
//               {errors.name && errors.name.type === 'minLength' && (
//                   <div>이름은 최소 2자 이상 입력해야 합니다.</div>
//               )}
//               <label htmlFor="phone">전화번호</label>      
//               <input {...register('phone')} />
//               <label htmlFor="email">이메일</label>      
//               <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
//               {errors.email && errors.email.type === 'pattern' && (
//                   <div>이메일 형식과 맞지 않습니다!</div>
//               )}
//               <label htmlFor="password">비밀번호</label>      
//               <input {...register('password', { required: true, minLength: 8 })} />
//               {errors.password && errors.password.type === 'minLength' && (
//                   <div>비밀번호는 최소 8자 이상 입력해야 합니다.</div>
//               )}
//               <label htmlFor="confirmPassword">비밀번호 확인</label>      
//               <input {...register('confirmPassword', { required: true, validate: (value) => value === passwordRef.current })}
//               type='password' />
//         </form>
          
//     </>
//   );
// }
