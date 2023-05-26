import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Colors } from '../Common/Styles';

export default function Admin() {
  return (
    <>
      <AdminDiv>
        관리자 페이지에는 보호소 방문 신청서 폼을 확인할 수 있어야 해.
      </AdminDiv>
    </>
  );
}

const AdminDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 150px auto;
  background-color: ${Colors.s};
`