import React, { useState } from 'react';
import { ReservationHistory } from './ReservationHistoryComponent';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';

export const MyPage = () => {

    const userName = localStorage.getItem('userName');
    
return (
    <>
      <LogoutDiv>
            <NameContainer>
                <h3>{userName}님. 반갑습니다!</h3>
            </NameContainer>
            <TextContainer>
                유입하고 싶은 언더독들을 구경해보세요!
            </TextContainer>
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
