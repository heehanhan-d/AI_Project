import React from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Common/Styles';
import { MAIN_PATH } from '../Common/Path';

export const SignOff = () => {
    const nickName = localStorage.getItem('nickname');
    console.log('nickName:', nickName);

    const handleSignOff = () => {
        console.log('localStorage:', localStorage.getItem('token'));
        localStorage.removeItem('token');
        console.log('localStorage:', localStorage.getItem('token'));
        localStorage.removeItem('nickname');
    };

    return (
        <>
            <SignOffDiv>
                <NameContainer>
                    <h3>{nickName}님!</h3>
                </NameContainer>
                <TextContainer>
                    그동안 유입해주셔서 감사합니다!
                </TextContainer>
                <LinkStyle to={MAIN_PATH}>
                    <Button onClick={handleSignOff}>You, if 그만 하기</Button>
                </LinkStyle>
            </SignOffDiv>
        </>
    );
}

const SignOffDiv = styled.div`
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

