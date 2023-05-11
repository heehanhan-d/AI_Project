import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../../Img/banner.png";
import { Body } from "../common/layout";
import { colors } from "../../Styles/colors";


export default function BannerComponent() {
  return (
    <Body>
      <BannerImage src={banner} alt="배너" />
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
  border: 1rem solid ${colors.main};
  position: relative;
  width: 100rem;
  top: 5rem;
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
  border-radius: 1.875rem;
  margin: 4.688rem auto;
  top: 26rem;
  padding: 0.625rem 3.125rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  word-break: keep-all;
`;