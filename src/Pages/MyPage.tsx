import React, { useState } from 'react';

export const MyPage: React.FC = () => {

    const [userName, setUserName] = useState('');

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleUpdate = () => {
        //사용자 정보 업데이트 로직 추가
    }

    return (
        <><h1>마이페이지</h1>
            <label htmlFor="userName">
                사용자명
                <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                />
            </label>
            <button onClick={handleUpdate}>저장하기</button>
        </>
    )
}