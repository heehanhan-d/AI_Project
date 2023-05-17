import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Body } from "../Common/Layout";
import { ScrollRef } from '../Common/ScrollRef';


export default function Service() {
  
  return (
    <Body>
        <ScrollRef>
            <p>유기견을 입양하세요, 유입(You, if) 서비스 소개</p>
        </ScrollRef>
    </Body>
  );
}
