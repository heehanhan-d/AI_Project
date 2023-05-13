import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../../Img/Banner.png";
import { Body } from "../common/layout";
import { colors } from "../common/colors";


export default function BannerComponent() {
  return (
    <Body>
      <BannerImage src={Banner} alt="배너" />
      <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
        <AIButton>
              AI로 나에게 어울리는 UNDERDOG 찾기
        </AIButton>
      </Link>  
    </Body>
  );
}


const BannerImage = styled.img`
  display: flex;
  justify-content: center;
  border: 15px solid ${colors.main};
  position: relative;
  width: 90%;
  margin-top: 160px;
  left: 5px;
  z-index: 10;
`;

const AIButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Logo";
  font-size: 20px;
  color: ${colors.w};
  background-color: ${colors.main};
  border: solid ${colors.main};
  border-radius: 30px;
  margin: 75px auto;
  top: 1165px;
  padding: 10px 50px;
  left: 1010px;
  transform: translateX(-50%);
  cursor: pointer;
  word-break: keep-all;
  z-index: 10;
`;