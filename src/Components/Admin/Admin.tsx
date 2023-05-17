import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Body } from "../Common/Layout";
import { ScrollRef } from '../Common/ScrollRef';

export default function Admin() {
  return (
    <Body>
        <ScrollRef>
            <p>관리자</p>
        </ScrollRef>
    </Body>
  );
}
