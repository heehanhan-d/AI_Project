import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Colors, Button } from '../../Components/Common/Styles';
import { Body } from '../../Components/Common/Layout';
import { ScrollRef, ResultRef } from '../../Components//Common/Ref';
import AdoptGuideImg from '../../Img/AdoptGuide.png';
import CheckListImg from '../../Img/CheckList.png';

export function Adopt() {
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
        return null;
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
                    보호소 방문 예약하기
                </VisitButton>
            );
        }
        return null;
    };

    const renderReservation = () => {
        return (
            <Reservation>
                <p>예약 신청 폼</p>
            </Reservation>
        )
    }

    return (
        <Body>
            <ScrollRef>
                <DogDetailDiv>
                    언더독 정보
                </DogDetailDiv>
                {renderAdoptButton()}
            </ScrollRef>
            {shownAdoptInfo &&
                <ResultRef>
                    {renderAdoptInfo()}
                    {renderCheckButton()}
                </ResultRef>}
            {shownCheckList &&
                <ResultRef>
                    {renderCheckList()}
                    {renderVisitCenterButton()}
                </ResultRef>}
            {shownVisitCenter &&
                <ResultRef>
                    {renderReservation()}
                </ResultRef>}
        </Body>
    )
}

    const DogDetailDiv = styled.div`
    display: flex;
    width: 80%;
    height: 500px;
`

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
    top: -150px;
    cursor: pointer;
`;

    const AdoptGuide = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    position: relative;
    width: 80%;
    height: 500px;
    top: 205px;
    left: 80px;
`

    const CheckButton = styled(Button)`
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px 50px;
    border: 1px solid ${Colors.footer};
    border-radius: 300px;
    background-color: ${Colors.footer};
    color: ${Colors.w};
    font-family: "Logo";
    font-size: 20px;
    left: 800px;
    bottom: 325px;
    cursor: pointer;
`;

const CheckList = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    position: relative;
    width: 80%;
    height: 500px;
    margin-top: 200px;
    left: 200px;
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
    left: 850px;
    margin-top: 15px;
    cursor: pointer;
`;

const Reservation = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    color: ${Colors.w};
    background-color: ${Colors.b};
    margin-top: 200px;
    margin-bottom: 200px;
    top: 30px;
`