import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import styled from "styled-components";
import { Body } from "../Common/Layout";
import { Colors, Button, FindUnderdog } from "../Common/Styles";
import Underdog from "../../Img/Underdog.png";
import { ResponseData } from '../Common/Interface';
import AiResult from './AiResult';

export default function FileUpload() {
    
    // 파일 업로드
    const [filename, setFilename] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [responseData, setResponseData] = useState<string[]>([]);
    
    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
            setFilename(file.name);
        } else {
            console.log('파일이 선택되지 않았습니다.');
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSearch = async () => {
        if (filename) {
            setModalMessage('');
            setShowModal(false);

            // 파일 업로드
            const formData = new FormData();
            const fileInput = document.querySelector('input[type=file]') as HTMLInputElement | null;
            if (fileInput && fileInput.files && fileInput.files[0]) {
                formData.append('file', fileInput.files[0]);

                try {
                    //파일을 AI 서버로 전송하는 POST 요청
                    const response = await axios.post<ResponseData>('http://127.0.0.1:5000/breedsAI/user', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    // 응답 처리
                    console.log(response.data);
                    const responseData = response.data.data;
                    responseData.map((item: string) => {
                        console.log(item);
                    });
                    setResponseData(responseData);

                } catch (e) {
                    // 오류 처리
                    const error = e as AxiosError;
                    console.error(error.response?.data || error.message);
                }
            } else {
                console.log('파일을 찾을수 없습니다.');
            }
        } else {
            setModalMessage('파일을 먼저 선택해주세요!');
            setShowModal(true);
        }
    };

    
    // 자동 화면 스크롤링
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [responseData]);

    return (
        <Body>
            <DragDiv>
                <UnderdogImage src={Underdog} />
                <TextDiv>{FindUnderdog}</TextDiv>
                <UploadButton>사진 추가하기
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleFileInputChange}
                    />
                </UploadButton>
                {filename && <p>파일명: {filename}</p>}
            </DragDiv>
                <SearchButton onClick={handleSearch}>AI로 UNDERDOG 검색하기</SearchButton>
                <div ref={resultRef}></div>
                <AiResult responseData={responseData} items={[]} />
            {showModal && (
                <Modal>
                    <ModalContent>
                        <h3>{modalMessage}</h3>
                        <ModalButton onClick={closeModal}>닫기</ModalButton>
                    </ModalContent>
                </Modal>
            )}
    </Body>
)}

const UnderdogImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    margin: 30px 240px 30px 240px;
    left: 30px;
`;

const DragDiv = styled.div`
    width: 40%;
    height: 480px;
    border: 5px dashed ${Colors.main};
    margin-bottom: 250px;
`;

const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: -60px 0 0 10px;
    font-size: 32px;
    font-weight: bold;
    color: ${Colors.main};
`;

const UploadButton = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Logo";
    font-size: 20px;
    color: ${Colors.w};
    background-color: ${Colors.footer};
    margin: 40px 275px 0 275px;
    padding: 10px 50px;
    border-radius: 300px;
    top: 120px;
    cursor: pointer;
    word-break: keep-all;

    input {
        display: none;
    }
`;

//     const AISearchDiv = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         position: relative;
//         float: none;
//         margin: 0 auto;
// `;

const SearchButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px 50px;
    border: 1px solid ${Colors.main};
    border-radius: 300px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    font-family: "Logo";
    font-size: 20px;
    top: -280px;
    cursor: pointer;
`;
    
const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin-bottom: 270px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Colors.w};
    font-family: "Text";
`;

const ModalContent = styled.div`
    background-color: ${Colors.w};
    padding: 20px;
    border-radius: 5px;
`;

const ModalButton = styled(Button)`
    margin-top: 10px;
    padding: 10px 18px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Logo';
`;


    const Div = styled.div`
        margin-bottom: 40px;
        width: 80%;
        height: 500px;
    `