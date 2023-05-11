import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colors } from "../Styles/colors";
import underdog from "../Img/underdog.png";
import { Body } from '../components/common/layout';

export const AISearchPage = () => {

    // 파일명
    const [filename, setFilename] = useState("");

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
            // 파일명 저장
            setFilename(file.name);
            // 파일 업로드 로직 구현
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
        // 사용자에게 알림 메시지
    }
    return (
        <AISearchDiv>
            <DragDiv>
                    <UnderdogImage src={underdog} />
                    <TextDiv>{ Text }</TextDiv>
                    <PictureBtn>사진 추가하기
                    <PictureInput
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileInputChange}
                    />
                    </PictureBtn>
                    {filename && <p>파일명: {filename}</p>}
            </DragDiv>
                    <SearchBtn>AI로 UNDERDOG 검색하기</SearchBtn>
        </AISearchDiv> 
    );
};


const AISearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    float: none;
`

const UnderdogImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18.75rem;
  margin: 0 15rem 3rem 15rem;

`;

const DragDiv = styled.div`
    width: 50rem;
    height: 30rem;
    border: 0.3rem dashed ${colors.main};
    margin: 6.25rem auto;
`

const Text = `PLEASE FIND MY UNDERDOG`

const TextDiv = styled.div`
    width: 30rem;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: -5rem 0 0 10rem;
    font-size: 2rem;
    font-weight: bold;
    color: ${colors.main};
`

const PictureBtn = styled.label`
    display: flex;
    justify-contents: center;
    align-items: center;
    font-family: "Logo";
    font-size: 1.25rem;
    color: ${colors.w};
    background-color: ${colors.footer};
    margin: 6rem 18rem 0 18rem;
    padding: 0.625rem 3.125rem;
    border-radius: 18.75rem;
    cursor: pointer;
    word-break: keep-all;
`

const PictureInput = styled.input`
    display: none;
`

const SearchBtn = styled.button`
    display: flex;
    justify-contents: center;
    align-items: center;
    position: relative;
    padding: 0.625rem 3.125rem;
    border: 0.063rem solid ${colors.main};
    border-radius: 18.75rem;
    background-color: ${colors.main};
    color: ${colors.w};
    font-family: "Logo";
    font-size: 1.25rem;
    top: -3rem;
`
