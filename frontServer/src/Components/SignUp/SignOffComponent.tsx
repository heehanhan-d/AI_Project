import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Common/Styles';
import { BackServer, MAIN_PATH } from '../Common/Path';
import axios from 'axios';
import { Modal, ModalContent, ModalButton } from '../Common/Styles';

export const SignOff = () => {
    
    const nickName = localStorage.getItem('nickname');
    console.log('nickName:', nickName);

    const [showFalseModal, setShowFalseModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSignOff = async () => {
        const token = localStorage.getItem('token');
        console.log('token:', token);

        if (token) {

            console.log('token:', token);

            try {
                const response = await axios.delete(`${BackServer}/auth/users/sign-off`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                        }
                    });
            
                console.log('response:', response);
                console.log('response.data:', response.data);
            
                const message = response.data.message;
                console.log('message:', message);
                    
                if (message === '이미 탈퇴된 회원입니다.') {

                    setShowFalseModal(true);

                    const signOffEmail = localStorage.getItem('email');
                    localStorage.setItem('signOffEmail', String(signOffEmail));
                    console.log('signOffEmail:', signOffEmail);
            
                    // // 로그아웃 처리
                    localStorage.removeItem('token');
                    localStorage.removeItem('nickname');
                    localStorage.removeItem('email');
            
                } else if (message === '회원 탈퇴 완료')
                    setShowSuccessModal(true);
                } catch (e) {
                    console.error(e);
                }
            }
        }
    
    const closeModal = () => {
        setShowFalseModal(false);
        setShowSuccessModal(false);

        window.location.href = MAIN_PATH;

    }
    return (
        <>
            <SignOffDiv>
                <NameContainer>
                    <h3>{nickName}님!</h3>
                </NameContainer>
                <TextContainer>
                    그동안 유입해주셔서 감사합니다!
                </TextContainer>
                    <Button onClick={handleSignOff}>
                        You, if 그만 하기
                </Button>
                {showFalseModal && (
                    <Modal>
                        <ModalContent>
                            <h1>회원 탈퇴 실패</h1>
                            <p>이미 탈퇴한 회원입니다.</p>
                            <ModalButton onClick={closeModal}>
                                확인
                            </ModalButton>
                        </ModalContent>
                    </Modal>
                )}
                                {showSuccessModal && (
                    <Modal>
                        <ModalContent>
                            <h1>회원 탈퇴 완료</h1>
                            <p>그동안 You, if을 이용해주셔서 감사합니다.</p>
                            <ModalButton onClick={closeModal}>
                                확인
                            </ModalButton>
                        </ModalContent>
                    </Modal>
                )}
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

