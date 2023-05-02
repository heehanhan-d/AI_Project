import React from 'react';
import styled from "styled-components";
import picture from "../Img/search.png";

const Picture = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 50px;
`


export const AISearchPage = () => {
    return (
        <div>
            <Picture src={picture} />
            검색 페이지
            <button className="picture">사진 추가하기</button> 
        </div> 
    );
};

