import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import '../Common/Font.css';
import { Colors, Button, LinkStyle } from '../Common/Styles';
import { SEARCH_PATH } from '../Common/Path';
import { ScrollRef } from '../Common/Ref';
import BannerImg from "../../Img/Banner.png";
import BannerImg1 from "../../Img/Banner2.png";
import BannerImg2 from "../../Img/Banner3.png";
import BannerImg3 from "../../Img/Banner4.png";

const bannerImages = [BannerImg, BannerImg1, BannerImg2, BannerImg3];
const imageChangeInterval = 2000; // 2초

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 이미지 변경을 위한 타이머 설정
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, imageChangeInterval);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <ScrollRef>
        <MainDiv>
          <LinkStyle to={SEARCH_PATH} style={{ textDecoration: "none", color: "inherit" }}>
            <AIButton>
              AI로 나에게 어울리는 UNDERDOG 찾기
            </AIButton>
          </LinkStyle>
          <BannerImage src={bannerImages[currentImageIndex]} alt="배너" />
        </MainDiv>
      </ScrollRef>
    </>
  );
}

const MainDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.w};
  margin-top: 65px;
  float: none;
`;

const BannerImage = styled.img`
  display: flex;
  justify-content: center;
  border: 15px solid ${Colors.main};
  position: relative;
  width: 90%;
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
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  word-break: keep-all;
  bottom: -16px;
  z-index: 10;
`;

