import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import '../Common/Font.css';
import { Link } from "react-router-dom";
import BannerImg from "../../Img/Banner.png";
import { Body } from "../Common/Layout";
import { Colors, Button, LinkStyle } from '../Common/Styles';
import { SEARCH_PATH } from '../Common/Path';
import { ScrollRef } from '../Common/Ref';


export default function Banner() {
  
  return (
    <Body>
      <ScrollRef>
        <BannerImage src={BannerImg} alt="배너" />
      </ScrollRef>
      <LinkStyle to={SEARCH_PATH} style={{ textDecoration: "none", color: "inherit" }}>
        <AIButton>
              AI로 나에게 어울리는 UNDERDOG 찾기
        </AIButton>
      </LinkStyle>  
    </Body>
  );
}


const BannerImage = styled.img`
  display: flex;
  justify-content: center;
  border: 15px solid ${Colors.main};
  position: relative;
  width: 90%;
  top: -160px;
  margin-left: 85px;
  // margin-bottom: 250px;
  z-index: 10;
`;

const AIButton = styled(Button)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Logo";
  font-size: 20px;
  color: ${Colors.w};
  background-color: ${Colors.main};
  border: solid ${Colors.main};
  border-radius: 30px;
  margin-top: -200px;
  padding: 10px 50px;
  left: 1010px;
  transform: translateX(-50%);
  cursor: pointer;
  word-break: keep-all;
  z-index: 10;
`;
