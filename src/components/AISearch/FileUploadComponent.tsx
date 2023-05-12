import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import styled from "styled-components";
import { Body } from "../common/layout";
import { colors } from "../common/colors";
import underdog from "../../Img/Underdog.png";
import { StyledPictureInputProps } from "../../interface";

export default function FileUploadComponent() {
    
    // 파일명
    const [filename, setFilename] = useState("");
    
    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
            setFilename(file.name);

            // 파일 업로드
            const formData = new FormData();
            formData.append('file', file);

            try {
                //파일을 AI 서버로 전송하는 POST 요청
                const response = await axios.post('http://127.0.0.1:5000/breedsAI/user', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // 응답 처리
                console.log(response.data);

            } catch (e) {
                // 오류 처리
                const error = e as AxiosError;
                console.error(error.response?.data || error.message);
            }
        } else {
            console.log("파일이 선택되지 않았습니다.");
        }
        // 사용자에게 알림 메시지(toast나 alert 사용)
    };

    return (
        <Body>
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
        </Body>
    );
}
  

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
    margin-top: 10rem;
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
    justify-content: center;
    align-items: center;
    font-family: "Logo";
    font-size: 1.25rem;
    color: ${colors.w};
    background-color: ${colors.footer};
    margin: 3rem 18rem 0 18rem;
    padding: 0.625rem 3.125rem;
    border-radius: 18.75rem;
    cursor: pointer;
    word-break: keep-all;
`

const PictureInput = styled.input.attrs<StyledPictureInputProps>((props) => ({
    type: "file",
    accept: ".jpg, .jpeg, .png",
    onChange: props.onChange
}))`
    display: none;
`