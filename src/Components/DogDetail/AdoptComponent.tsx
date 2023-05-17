import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Colors, Button } from '../../Components/Common/Styles';
import { Body } from '../../Components/Common/Layout';
import { ScrollRef, ResultRef } from '../../Components//Common/Ref';
import AdoptGuideImg from '../../Img/AdoptGuide.png';
import AdoptCheckImg from '../../Img/AdoptCheck.png';

export function Adopt() {
    const [shownAdoptInfo, setShownAdoptInfo] = useState(false);

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
        // return null;
        return (
            <AdoptCheck>
                <img src={AdoptCheckImg} alt="입양 전 주의사항을 확인해보세요." />
            </AdoptCheck>
        )
    };

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
                </ResultRef>}
       </Body>
    );
}


const DogDetailDiv = styled.div`
    display: flex;
    width: 80%;
    height: 500px;
`

const AdoptButton = styled(Button)`
    // display: ${props => (props.hidden ? 'none' : 'block')};
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
    width: 90%;
    height: 550px;
    top: 205px;
    border: 1px solid ${Colors.b};
    left: 80px;
`

const AdoptCheck = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    position: relative;
    width: 70%;
    top: 410px;
    margin: 0 auto;
`