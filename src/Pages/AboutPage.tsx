import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors, LinkStyle } from '../Components/Common/Styles';
import UnderdogGraph from '../Components/Data/UnderdogGraph';
import DisposalRate from '../Components/Data/DisposalRate';
import AdoptRate from '../Components/Data/AdoptRate';
import AboutLogo from '../Img/AboutLogo.png';
import {motion, useAnimation} from 'framer-motion'
import LoveUnderdog from '../Img/LoveUnderdog.png';
import Underdog from '../Img/Underdog.png';
import AboutDog from '../Components/About/AboutDogComponent';
import AboutYouif from '../Components/About/AboutYouifComponent';
import { MAIN_PATH, SEARCH_PATH } from '../Components/Common/Path';


export const AboutPage = () => {
  const slideControls = useAnimation();

  const handleSlideInView = (inView: boolean) => {
    if (inView) {
      slideControls.start('end');
    }
  };

  return (
      <ScrollSnapWrap>
        <SlideDiv>
          <AboutDiv>
            <AboutDog/>
             유기견을 입양해요,
            <FadeInContainer>
              <YouIFa>YOU If</YouIFa>
            </FadeInContainer>
          </AboutDiv>
        </SlideDiv>
        <SlideDiv>
          <motion.div
          animate={{
            scale: [1, 1.5, 1.4, 2, 1],
            rotate: [0, 0, 360, 0, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}>
            <LoveImg src = {LoveUnderdog} alt = '강아지사랑해'/>
          </motion.div>
            <LoveText>you, if you love underdog</LoveText>
            <SecondText>사랑이 필요한 언더독, 당신의 마음에 유입하세요</SecondText>
        </SlideDiv>
        <SlideDiv>
          <AboutDiv>What Is
            <Logo src={ AboutLogo }/>
          ?</AboutDiv>
          <AboutYouif/>
        </SlideDiv>
        <SlideDivDiv>
        <Logo src={ AboutLogo } />
        <SecondText>는 왜 필요한가요?</SecondText>
        </SlideDivDiv>
        <SlideDivDiv>
          <UnderdogGraph />
            <GraphText>
              매해 7~8만에 가까운 유기, 유실 동물들이 접수되고 있습니다<br/>
              그 중에서도 비품종견이 압도적으로 높은 비율을 차지합니다
            </GraphText>
        </SlideDivDiv>
        <SlideDivDiv>
          <DisposalRate />
          <GraphText>그 누구에게도 선택받지 못해<br/>인도적 처리(폐사 및 안락사)되는 비율이 높습니다</GraphText>
        </SlideDivDiv>
        <SlideDivDiv>
          <AdoptRate/>
          <GraphText>사람들이 반려 동물을 입양하는 방법 중에서도<br/>유기견 입양의 비율은 적습니다</GraphText>
        </SlideDivDiv>
        <SlideDivDiv>
        <Logo src={ AboutLogo } /><SecondText>는 유기견 문제의 해결을 위해 소외되는 비품종견의 입양을 활성화 시키고자 합니다</SecondText>
        </SlideDivDiv>
        <SlideDiv>
          <SecondText>
            <motion.div
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity
            }}>🤳 ➡️ 🤖 ➡️ 🖥 ➡️ 🐕</motion.div>
            <br/>
            인공지능을 활용, 비품종견 유사 품종을 추출하여 <br/>
            <br/>
            입양 희망자가 이미지 검색을 기반으로 비품종견을 추천받을 수 있습니다
          </SecondText>
          <LinkStyle to={SEARCH_PATH} style={{ textDecoration: "none", color: "inherit" }}>
            <AIbutton> AI로 Underdog 찾기 </AIbutton>
          </LinkStyle>
        </SlideDiv>
        <SlideDiv>
          <SecondText>
            생김새와 성질을 특정하기 어려운 비품종견<br/>
            그렇기 때문에 더욱 매력적인 underdog<br/>
            품종, 비품종 상관없이 소외받는 반려견이 없도록,
          </SecondText>
          <LoveText>보호자와 반려견의 행복한 동행을 꿈꿉니다.</LoveText>
          <LinkStyle to={MAIN_PATH} style={{ textDecoration: "none", color: "inherit" }}>
            <img src={Underdog} width='200px'/>
          </LinkStyle>
        </SlideDiv>
      </ScrollSnapWrap>
  )
};

const AboutDiv = styled.div`
  display: flex;
  font-family: 'Logo';
  font-size: 40pt;
  color: ${Colors.main};
  justify-content: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const FadeInContainer = styled.div`
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1s ease-in;
`;

const ScrollSnapWrap = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 305px);
  overflow-y: scroll;
`
const SlideDiv = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 305px);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Ui';
`

const YouIFa = styled.a`
  color: ${Colors.footer}
`

const LoveText = styled.p`
  font-size: 40pt;
  color: #FFABAB;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Logo';
`;

const SecondText = styled.p`
  font-size: 20pt;
  color: ${Colors.footer};
`;

const GraphText = styled.p`
  font-size: 15pt;
  color: ${Colors.b};
`;

const Logo = styled.img`
    width: auto;
    height: 55px;
`

const SlideDivDiv = styled.div`
  scroll-snap-align: center;
  display: flex;
  width: 100%;
  height: calc(100vh - 305px);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Ui';
`

const LoveImg = styled.img`
  display: flex;
  height: 200px;
`

const AIbutton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "UI";
  font-size: 20pt;
  font-weight: bold;
  color: ${Colors.w};
  background-color: ${Colors.main};
  border: ${Colors.main};
  border-radius: 30px;
  padding: 1rem;
  cursor: pointer;
  word-break: keep-all;
  box-shadow: 0px 2px 4px ${Colors.footer}
`
