import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Colors, Button } from '../../Components/Common/Styles';
import { ScrollRef, CenterRef, ResultRef } from '../../Components//Common/Ref';
import AdoptGuideImg from '../../Img/AdoptGuide.png';
import CheckListImg from '../../Img/CheckList.png';
import ReservationForm from './ReservationFormComponent';
import { DogProfile } from "./DogProfile";

export default function Adopt() {
    const [shownAdoptInfo, setShownAdoptInfo] = useState(false);
    const [shownCheckList, setShownCheckList] = useState(false);
    const [shownVisitCenter, setShownVisitCenter] = useState(false);

    const handleAdoptButtonClick = () => {
        setShownAdoptInfo(true);
    };

    const renderAdoptButton = () => {
        if (!shownAdoptInfo) {
            return (
                <AdoptButton onClick={handleAdoptButtonClick}>
                    입양 신청하기
                </AdoptButton>
            );
        }
        return (
            <IngButton>입양 신청중</IngButton>
        )
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
            <ScrollRef>
                <DogProfile />
                {renderAdoptButton()}
            </ScrollRef>
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
        margin-left: 350px;
        cursor: pointer;
        z-index: 10px;
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
        margin-left: 350px;
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
        top: -80px;
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
        top: -100px;
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
    top: 2150px;
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
    top: -350px;
    margin-top: 200px;
`