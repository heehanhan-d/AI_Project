import React, { useState } from 'react';
import { ReservationHistory } from './ReservationHistoryComponent';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Common/Styles';
import { LOGOUT_PATH, SIGNOFF_PATH } from '../Common/Path';

export const MyPage = () => {

    const nickName = localStorage.getItem('nickname');
    
return (
    <>
      <LogoutDiv>
            <NameContainer>
                <h3>{nickName}님. 반갑습니다!</h3>
            </NameContainer>
            <TextContainer>
                유입하고 싶은 언더독들을 구경해보세요!
            </TextContainer>
            <LinkStyle to={LOGOUT_PATH}>
                <Button>로그아웃 하기</Button>
            </LinkStyle>
            <LinkStyle to={SIGNOFF_PATH}>
                <Button>회원탈퇴 하기</Button>
            </LinkStyle>
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
    background-color: ${Colors.sub};
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
  margin-bottom: 20px;
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
  margin: 50px 10px 0 10px;
`;

