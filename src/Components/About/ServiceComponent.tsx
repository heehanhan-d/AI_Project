import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Body } from '../Common/Layout';
import { Colors } from '../Common/Styles';
import '../Common/Font.css';
import { ScrollRef } from '../Common/Ref';

export default function Service() {
  return (
    <ScrollRef>
        <AboutDiv>
            🐕 유기견을 입양해요,
          <FadeInContainer>
            <AnimatedLink> YOU If </AnimatedLink>
          </FadeInContainer>
        </AboutDiv>
        <div>
            <p>안녕하세요</p>
        </div>
    </ScrollRef>
  );
}

const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  font-size: 40pt;
  width: 100%;
  font-family: "Logo";
  padding-bottom: 150px;
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

const AnimatedLink = styled.a`
  color: ${Colors.footer};
  text-decoration: none;
`;
