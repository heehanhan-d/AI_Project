import React, { useState } from 'react';

export const SignInPage: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 로그인 처리 로직 추가
    }


    return (
        <><h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    이메일
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label htmlFor="password">
                    비밀번호
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button type='submit'>로그인</button>
            </form>
        </>
    )
}


// import React from 'react';

// export const SignInPage = () => {
//     return (
//         <div>
//             로그인 페이지
//         </div>
//     );
// }
