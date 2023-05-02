import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import ai_banner from "../Img/main_ai_bn_black.png";

const MainDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`

const BnImg = styled.img`
    display: flex;
    justify-content: center;
    width: 1700px;
    margin: 50px;
    border: 1rem solid #FED159; 

`

export const MainPage = () => {
    return (
        <MainDiv>
                <BnImg src={ai_banner} />
                <div className="button">
                    <Link to="/search" style={{ textDecoration: "none"}}>
                        <button className="ai">AI로 나에게 어울리는 UNDERDOG 찾기.</button>   
                    </Link>
                </div>        
        </MainDiv>
    );
};
