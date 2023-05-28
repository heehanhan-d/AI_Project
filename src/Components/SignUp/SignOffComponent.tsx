import React from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Common/Styles';
import { BackServer, MAIN_PATH } from '../Common/Path';
import axios from 'axios';

export const SignOff = () => {
    const nickName = localStorage.getItem('nickname');
    console.log('nickName:', nickName);

    const handleSignOff = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            await fetchSignOff(token);
            localStorage.getItem('SignOffEmail'); 
            console.log('SignOffEmail:', localStorage.getItem('email'));
        }
    };
    
    const fetchSignOff = async (Token: string) => {
        try {
            const response = await axios.delete(`${BackServer}/auth/users/sign-off`, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });

            const message = response.data.message;
            if (message === "이미 탈퇴된 회원입니다.") {
                const signOffEmail = localStorage.getItem('email')
                console.log(signOffEmail);
            }
        } catch (e) {
            console.error(e);
        }
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
                    <Button onClick={handleSignOff}>
                        You, if 그만 하기
                    </Button>
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

