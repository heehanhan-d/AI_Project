import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';

export default function AboutYouif() {
    return (
        <>
        <br/>
        <WhatDiv>
            유실 및 유기되어 보호소에서 보호중인 강아지 중 <br />
            `비품종견(underdog)`과 입양 희망자를 연결하여 <br />
            underdog 입양을 활성화하기 위한 서비스입니다.
        </WhatDiv>
        <br/>
        <WhatisDiv>
        <motion.div 
            variants={{
            end: {left: '0'}
            }}
            initial="start" 
            animate="end" 
            exit="exit"
            transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3, 
            ease: "easeIn"
            }}
            style={{left: '-200px', position: 'relative', transform: 'scaleX(-1)'}}
        >🐕</motion.div>
        <motion.div
          animate={{
            scale: [1, 0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0
          }}>💛</motion.div>
        <motion.div 
            variants={{
            end: {left: '0'}
            }}
            initial="start" 
            animate="end" 
            exit="exit"
            transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeIn"
            }}
            style={{left: '200px', position: 'relative', transform: 'scaleX(1)'}}
        >🧑🏻</motion.div>
        </WhatisDiv>
        </>
    )
}

const WhatDiv = styled.div`
  display: flex;
  font-family: 'UI';
  font-size: 20pt;
  color: ${Colors.footer};
  justify-content: center;
`;

const WhatisDiv = styled.div`
  display: flex;
  font-family: 'UI';
  font-size: 40pt;
  color: ${Colors.footer};
  justify-content: center;
`;
