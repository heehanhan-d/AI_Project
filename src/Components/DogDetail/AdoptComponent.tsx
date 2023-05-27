import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Colors, Button } from '../../Components/Common/Styles';
import AdoptGuideImg from '../../Img/AdoptGuide.png';
import CheckListImg from '../../Img/CheckList.png';
import ReservationForm from './ReservationFormComponent';
import { LoginForm } from '../DogDetail/LoginFormComponent';
import { DogProfile } from "../../Components/DogDetail/DogProfile";
import { CenterRef } from "../Common/Ref";

export default function Adopt() {
    const [shownAdoptInfo, setShownAdoptInfo] = useState(false);
    const [shownCheckList, setShownCheckList] = useState(false);
    const [shownVisitCenter, setShownVisitCenter] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAdoptButtonClick = () => {
        if (isLoggedIn) {
            setShownAdoptInfo(true);
        } else {
            setShowLoginModal(true);
        }
    };

    const handleLogin = () => {
            setIsLoggedIn(true);
            setShownAdoptInfo(true);
            setShowLoginModal(false);
        return;
    };

    const handleModalClose = () => {
        setShowLoginModal(false);
    };

    const renderAdoptButton = () => {
        if (!shownAdoptInfo && isLoggedIn) {
            return (
                <AdoptButton onClick={handleAdoptButtonClick}>
                    입양 신청하기
                </AdoptButton>
            );
        } else if (!shownAdoptInfo && !isLoggedIn) {
            return (
                <AdoptButton onClick={handleAdoptButtonClick}> 로그인 후 입양 신청하기</AdoptButton>
            );
        } else {
            return (
                <IngButton>입양 신청중</IngButton>
            );
        }
    };

    const renderAdoptInfo = () => {
        if (shownAdoptInfo) {
            return (
                <AdoptGuide>
                    <img src={AdoptGuideImg} alt="동물을 입양한 당신이 자랑스럽습니다." />
                </AdoptGuide>
            );
        }
        return null;
    };

    const handleCheckButtonClick = () => {
        setShownCheckList(true);
    };
    
    const renderCheckButton = () => {
        if (!shownCheckList) {
            return (
                <CheckButton onClick={handleCheckButtonClick}>
                    입양 전 체크리스트 확인하기
                </CheckButton>
            );
        }
        return null;
    };

    const renderCheckList = () => {
        if (shownAdoptInfo) {
            return (
                <CheckList>
                    <img src={CheckListImg} alt="입양 전 주의사항을 확인해보세요." />
                </CheckList>
            );
        }
        return null;
    }

    const handleVisitCenterButtonClick = () => {
        setShownVisitCenter(true);
    };

    const renderVisitCenterButton = () => {
        if (!shownVisitCenter) {
            return (
                <VisitButton onClick={handleVisitCenterButtonClick}>
                    Underdog 만나러 가기!
                </VisitButton>
            );
        }
        // return null;
    };

    const renderReservation = () => {
        return (
            <Reservation>
                <ReservationForm />
            </Reservation>
        )
    }

    return (
        <>
                <DogProfile />
            {renderAdoptButton()}
            {showLoginModal && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalText>
                            로그인 후 언더독을 유입해보세요.
                        </ModalText>
                        <LoginForm
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            onLogin={handleLogin}
                            onClose={handleModalClose}
                        />
                    </ModalContent>
                </ModalOverlay>
            )}
            {shownAdoptInfo &&
                <CenterRef>
                    {renderAdoptInfo()}
                    {renderCheckButton()}
                </CenterRef>}
            {shownCheckList &&
                <CenterRef>
                    {renderCheckList()}
                    {renderVisitCenterButton()}
                </CenterRef>}
            {shownVisitCenter &&
                <CenterRef>
                    {renderReservation()}
                </CenterRef>}
        </>
    )
}

    const AdoptButton = styled(Button)`
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px 50px;
        border: 1px solid ${Colors.main};
        border-radius: 300px;
        background-color: ${Colors.main};
        color: ${Colors.w};
        font-family: "Logo";
        font-size: 20px;
        top: -70px;
        left: -425px;
        cursor: pointer;
        z-index: 10px;
    `;

    const ModalOverlay = styled.div`
        position: fixed;
        display: flex;
        align-items: center;
        width: 100%;
        height: 65%;
        background-color: ${Colors.w};
        justify-content: center;
    `;

    const ModalText = styled.div`
        padding-bottom: 30px;
        font-family: 'Logo';
        font-size: 20pt;
    `;


    const ModalContent = styled.div`
        background-color: ${Colors.footer};
        padding: 50px;
        border-radius: 100px;
        border: 1px solid ${Colors.s};
    `;

    const IngButton = styled(Button)`
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px 50px;
        border: 3px dashed ${Colors.main};
        border-radius: 300px;
        background-color: ${Colors.w};
        color: ${Colors.b};
        font-family: "Logo";
        font-size: 20px;
        top: -70px;
        left: -425px;
        cursor: pointer;
        z-index: 10px;
        `;
    
    const AdoptGuide = styled.div`
        display: flex;
        justify-content: center;
        align-item: center;
        position: relative;
        width: 80%;
        height: 600px;
        top: -60px;
        margin: 150px auto 180px auto;
    `

    const CheckButton = styled(Button)`
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 10px 50px;
        border: 1px solid ${Colors.footer};
        border-radius: 300px;
        background-color: ${Colors.footer};
        color: ${Colors.w};
        font-family: "Logo";
        font-size: 20px;
        top: -250px;
        margin: 0 auto;
        bottom: 325px;
        cursor: pointer;
    `;

const CheckList = styled.div`
        display: flex;
        justify-content: center;
        align-item: center;
        position: relative;
        width: 80%;
        height: 600px;
        margin: 0 auto 200px auto;
        top: -80px;
    `   

const VisitButton = styled(Button)`
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px 50px;
    border: 1px solid ${Colors.main};
    border-radius: 300px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    font-family: "Logo";
    font-size: 20px;
    left: 40%;
    top: 2100px;
    cursor: pointer;
    z-index: 10px;
`;

const Reservation = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 500px;
    color: ${Colors.b};
    background-color: ${Colors.w};
    border: 10px solid ${Colors.sub};
    border-radius: 30px;
    padding: 30px;
    bottom: 10px;
    margin-bottom: 250px;
`