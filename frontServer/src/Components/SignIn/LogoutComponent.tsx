import React from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Common/Styles';
import { MAIN_PATH } from '../Common/Path';

export const Logout = () => {
    const nickName = localStorage.getItem('nickname');
    console.log('nickName:', nickName);

    const handleLogout = () => {
        console.log('localStorage:', localStorage.getItem('token'));
        localStorage.removeItem('token');
        console.log('localStorage:', localStorage.getItem('token'));
        localStorage.removeItem('nickname');
    };

    window.location.href = MAIN_PATH;

    return (
        <>
            <LogoutDiv>
                <NameContainer>
                    <h3>{nickName}님!</h3>
                </NameContainer>
                <TextContainer>
                    한번 더 유입하러 오세요!
                </TextContainer>
                    <Button onClick={handleLogout}>You, if 에서 로그아웃 하기</Button>
            </LogoutDiv>
        </>
    );
}

const LogoutDiv = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: auto;
    color: ${Colors.b};
    background-color: ${Colors.w};
    border: 10px solid ${Colors.sub};
    border-radius: 30px;
    padding: 30px;
    margin: 150px auto;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Logo';
  font-size: 20px;
  padding-bottom: 30px;
`;


const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Text';
  font-size: 20px;
`;


const Button = styled.button<any>`
  padding: 10px 50px;
  background-color: ${Colors.footer};
  color: ${Colors.w};
  border: none;
  border-radius: 300px;
  cursor: pointer;
  font-family: 'Logo';
  font-size: 20px;
  margin-top: 50px;
`;

