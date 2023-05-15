import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import '../Common/Font.css';
import { Link } from "react-router-dom";
import BannerImg from "../../Img/Banner.png";
import { Body } from "../Common/Layout";
import { Colors } from "../Common/Colors";
import { SEARCH_PATH } from '../Common/Path';


export default function Banner() {

  const resultRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);
  
  return (
    <Body>
      <BannerImage ref={resultRef} src={BannerImg} alt="배너" />
      <Link to={SEARCH_PATH} style={{ textDecoration: "none", color: "inherit" }}>
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
  border: 15px solid ${Colors.main};
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
  color: ${Colors.w};
  background-color: ${Colors.main};
  border: solid ${Colors.main};
  border-radius: 30px;
  margin-top: -35px;
  padding: 10px 50px;
  left: 1010px;
  transform: translateX(-50%);
  cursor: pointer;
  word-break: keep-all;
  z-index: 10;
`;