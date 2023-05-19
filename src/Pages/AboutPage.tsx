import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../Components/Common/Styles';
import UnderdogGraph from '../Components/Data/UnderdogGraph';
import DisposalRate from '../Components/Data/DisposalRate';
import AdoptRate from '../Components/Data/AdoptRate';
import AboutLogo from '../Img/AboutLogo.png';

export const AboutPage = () => (
      <ScrollSnapWrap>
        <SlideDiv>
          <AboutDiv>
            🐕 유기견을 입양해요,
            <FadeInContainer>
              <YouIFa>YOU If</YouIFa>
            </FadeInContainer>
          </AboutDiv>
        </SlideDiv>
        <SlideDiv>
          <LoveText>you, if you love underdog</LoveText>
          <SecondText>사랑이 필요한 언더독, 당신의 마음에 유입하세요</SecondText>
        </SlideDiv>
        <SlideDiv>
      <AboutDiv>What Is<Logo src={ AboutLogo } />?</AboutDiv>
            유실 및 유기되어 보호소에서 보호중인 강아지 중 <br />
            `비품종견(underdog)`과 입양 희망자를 연결하여 <br />
            underdog 입양을 활성화하기 위한 서비스입니다.
        </SlideDiv>
        <SlideDiv>
        <Logo src={ AboutLogo } />는 왜 필요한가요?
        </SlideDiv>
        <SlideDiv>
          <UnderdogGraph />
          매해 7~8만에 가까운 유기, 유실 동물들이 접수되고 있습니다.<br/>
          그 중에서도 비품종견이 압도적으로 높은 비율을 차지합니다.
        </SlideDiv>
        <SlideDiv>
          <DisposalRate />
          그 누구에게도 선택받지 못해 인도적 처리(폐사 및 안락사) 되는 비율이 높은 현황입니다.
        </SlideDiv>
        <SlideDiv>
          <AdoptRate/>
          <div>사람들이 반려 동물을 입양하는 방법 중 유기견 입양의 비율은 적은 실정입니다.</div>
        </SlideDiv>
        <SlideDiv>
          YOUIF는 유기견 문제의 해결을 위해 소외되는 비품종견의 입양을 활성화 시키고자 합니다.
        </SlideDiv>
        <SlideDiv>
          인공지능을 활용하여 비품종견 유사 품종을 추출하여
          입양 희망자가 이미지 검색을 기반으로 비품종견을 추천받을 수 있습니다
        </SlideDiv>
        <SlideDiv>
          생김새와 성질을 특정하기 어려운 비품종견.
          그렇기 때문에 더욱 매력적인 underdog이 아닐까요?
          품종, 비품종 상관없이 소외받는 반려견이 없도록,
          <LoveText>보호자와 반려견의 행복한 동행을 꿈꿉니다.</LoveText>
        </SlideDiv>
      </ScrollSnapWrap>
);

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
  margin-bottom: 10px;
  font-family: 'Logo';
`;

const SecondText = styled.p`
  font-size: 20pt;
  color: ${Colors.footer};
`;

const Logo = styled.img`
    width: auto;
    height: 55px;
`