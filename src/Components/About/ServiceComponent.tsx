import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Body } from "../common/layout";
import { colors } from "../common/colors";


export default function ServiceComponent() {

    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);
  
  return (
    <Body>
        <div ref={resultRef}>
            <p>유기견을 입양하세요, 유입(You, if) 서비스 소개</p>
        </div>
    </Body>
  );
}
