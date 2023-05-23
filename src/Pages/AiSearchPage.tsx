import React, { useState, useEffect } from 'react';
import Search from '../Components/AiSearch/SearchComponent';
import Result from '../Components/AiSearch/ResultComponent';

export const AiSearchPage = () => {
    return (
        <>
            <Search />
            {/* <Result items={[]} responseData={[]} /> */}
        </>
    );
};
  
// import React, { useState, useEffect, useRef } from 'react';
// import axios, { AxiosError } from 'axios';
// import Select from 'react-select';
// import styled from 'styled-components';
// import { Colors, Button, FindUnderdog } from '../Common/Styles';
// import { AiServer } from '../Common/Path';
// import Underdog from '../../Img/Underdog.png';
// import { ResponseData } from '../Common/Interface';
// import { BackServer } from '../Common/Path';
// import { CenterRef, ImageSection } from '../Common/Ref';


// export default function Search() {

//     const [dogImages, setDogImages] = useState<string[]>([]);
    
//     // 파일 업로드
//     const [filename, setFilename] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const [responseData, setResponseData] = useState<string[]>([]);
    
//     const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             console.log(file);
//             setFilename(file.name);
//         } else {
//             console.log('파일이 선택되지 않았습니다.');
//         }
//     };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     const handleSearch = async () => {
//         if (filename) {
//             setModalMessage('');
//             setShowModal(false);

//             // 파일 업로드
//             const fileData = new FormData();
//             const fileInput = document.querySelector('input[type=file]') as HTMLInputElement | null;
//             if (fileInput && fileInput.files && fileInput.files[0]) {
//                 fileData.append('file', fileInput.files[0]);

//                 try {
//                     //파일을 AI 서버로 전송하는 POST 요청
//                     const response = await axios.post<ResponseData>(`${AiServer}`, fileData, {
//                         headers: {
//                             'Content-Type': 'multipart/form-data'
//                         }
//                     });

//                     // 응답 처리
//                     console.log(response.data);
//                     const responseData = response.data.data;
//                     responseData.map((item: string) => {
//                         console.log(item);
//                     });
//                     setResponseData(responseData);

//                 } catch (e) {
//                     // 오류 처리
//                     const error = e as AxiosError;
//                     console.error(error.response?.data || error.message);
//                 }
//             } else {
//                 console.log('파일을 찾을수 없습니다.');
//             }
//         } else {
//             setModalMessage('파일을 먼저 선택해주세요!');
//             setShowModal(true);
//         }
//     };
    
//     // 하단 스크롤링
//     const ref = useRef<HTMLDivElement>(null);
    
//     useEffect(() => {
//         if (ref.current) {
//             ref.current.scrollIntoView(
//                 {
//                     behavior: 'smooth',
//                     block: 'start'
//                 }
//             );
//         }
//     }, [responseData]);

    
//   const options = responseData.map((item) => ({
//     value: item,
//     label: item
//   }));
    
//     const [selectedOption, setSelectedOption] = useState(null);
    
//     const handleOptionChange = (option: any) => {
//         setSelectedOption(option);

//         if (option) {
//             axios
//               .get(`${BackServer}/search?breeds=${decodeURI(option.value)}`)
//                 .then((response) => {
//                     const DogData = response.data.data; 
//                     console.log('DogData:', DogData);
      
//                     // 이미지 출력을 위한 변수 선언
//                     const dogImages: string[] = [];
                    
//                     // DogData 배열의 각 요소에 대해 반복하여 img_url 출력
//                     DogData.forEach((dog: any) => {
//                         console.log('dog img_url:', dog.img_url);
//                         console.log('dog id:', dog.id);
                      
//                     // // DogImg 변수 갱신
//                     //     const dogImg = dog.img_url;
//                     //     console.log('dogImg:', dogImg);
                        
//                         // DogImages 배열에 img_url 추가
//                         dogImages.push(dog.img_url);
//                     });

//                     //화면에 이미지 출력
//                     setDogImages(dogImages);
//         })
//         .catch((error) => {
//           console.log('error:', error);
//         });
//     }
        
// };
//     return (
//         <>
//             <DragDiv>
//                 <UnderdogImage src={Underdog} />
//                 <TextDiv>{FindUnderdog}</TextDiv>
//                 <UploadButton>사진 추가하기
//                     <input
//                         type="file"
//                         accept=".jpg, .jpeg, .png"
//                         onChange={handleFileInputChange}
//                     />
//                 </UploadButton>
//                 {filename && <p>파일명: {filename}</p>}
//             </DragDiv>
//             <SearchButton onClick={handleSearch}>
//                 AI로 UNDERDOG 검색하기
//                 </SearchButton>
//             <ResultDiv>
//                 <Select
//                     options={options}
//                     value={selectedOption}
//                     onChange={handleOptionChange}
//                     placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
//                     />
//             </ResultDiv>
//             <ImageSection dogImages={dogImages} />
//             <CenterRef>
//             <ListDiv>
//                 {dogImages.map((dogImg: any, index: any) => (
//                 <ListCircle key={dogImg}>
//                         <img src={dogImg} alt='Dog' />
//                 </ListCircle>
//                 ))}
//             </ListDiv>
//             </CenterRef>
//             {showModal && (
//                 <Modal>
//                     <ModalContent>
//                         <h3>{modalMessage}</h3>
//                         <ModalButton onClick={closeModal}>닫기</ModalButton>
//                     </ModalContent>
//                 </Modal>
//             )}
//     </>
// )}

// const UnderdogImage = styled.img`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 35%;
//     margin: 30px 240px 30px 260px;
    
// `;

// const DragDiv = styled.div`
//     width: 40%;
//     height: 480px;
//     border: 5px dashed ${Colors.main};
//     left: 50%;
//     margin: 70px auto;
// `;

// const TextDiv = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     margin: -60px 0 0 10px;
//     font-size: 32px;
//     font-weight: bold;
//     color: ${Colors.main};
// `;

// const UploadButton = styled.label`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-family: "Logo";
//     font-size: 20px;
//     color: ${Colors.w};
//     background-color: ${Colors.footer};
//     margin: 40px 260px 0 260px;
//     padding: 10px 50px;
//     border-radius: 300px;
//     top: 120px;
//     cursor: pointer;
//     word-break: keep-all;
//     input {
//         display: none;
//     }
// `;

// const ResultDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     position: absolute;
//     margin: 0 auto 200px auto;
//     top: 100px;
//     border: 5px solid ${Colors.sub};

// `;

// const SearchButton = styled(Button)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     padding: 10px 50px;
//     border: 1px solid ${Colors.main};
//     border-radius: 300px;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     font-family: "Logo";
//     font-size: 20px;
//     top: -100px;
//     cursor: pointer;
//     margin: 0 auto;
// `;
    
// const Modal = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     margin-bottom: 350px;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: ${Colors.w};
//     font-family: "Text";
//     font-size: 20px;
// `;

// const ModalContent = styled.div`
//     background-color: ${Colors.w};
//     padding-bottom: 20px;
//     border-radius: 5px;
// `;


// const ModalButton = styled(Button)`
//     padding: 12px 24px;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-family: "Logo";
//     font-size: 15px;
//     margin: 10px auto 0 auto;
// `;

// const ListDiv = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     flex-wrap: wrap;
//     width: 100%;
//     justify-content: center;
//     margin: 50px auto 150px auto;
// `

// const ListCircle = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin: 16px;
//     flex: 1 0 18%;

//     img {
//         width:200px;
//         height:200px;
//         border-radius: 50%;
//         border: 0.5rem dashed ${Colors.sub};
//     }
// `