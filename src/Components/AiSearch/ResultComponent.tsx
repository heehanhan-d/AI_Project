import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import axios, { AxiosError } from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import { Body } from '../Common/Layout';
import { Colors, Button, FindUnderdog } from '../Common/Styles';
import { FetchDog } from "../../Api/FetchDog";
import { AiServer } from '../Common/Path';
import Underdog from '../../Img/Underdog.png';
import { AiResultProps, Dog, DogDetailsProps, ResponseData } from '../Common/Interface';
import { ScrollRef, ResultRef } from '../Common/Ref';
import { BackServer } from '../Common/Path';


export default function Underdogs({ responseData }: AiResultProps) {
    
  const options = responseData.map((item) => ({
    value: item,
    label: item
  }));
    
    const [selectedOption, setSelectedOption] = useState(null);
    
    const handleOptionChange = (option: any) => {
        setSelectedOption(option);

    if (option) {
      axios
        .get(`${BackServer}/search?breeds=${decodeURI(option.value)}`)
          .then((response) => {
              const DogData = response.data.data; 
              console.log('DogData:', DogData);

              // 이미지 출력을 위한 변수 선언
            let DogImg = '';
              
              // DogData 배열의 각 요소에 대해 반복하여 img_url 출력
              DogData.forEach((dog: any) => {
                console.log('dog img_url:', dog.img_url);
                
              // DogImg 변수 갱신
                DogImg = dog.img_url;

                return (
                  <ListCircle>
                    <img src={DogImg} alt='Dog' />
                  </ListCircle>
                )
              });
        })
        .catch((error) => {
          console.log('error:', error);
        });
      }
      
};
    return (
        <>
            <ResultDiv>
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleOptionChange}
                    placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
                    />
        </ResultDiv>
    </>
)}

    const ResultDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        margin: 0 auto 200px auto;
        top: 125px;
`;

const ListCircle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    flex: 1 0 18%;

    img {
        width:200px;
        height:200px;
        border-radius: 50%;
        border: 0.5rem dashed ${Colors.sub};
    }
`


// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from "react-router-dom";
// import axios, { AxiosError } from 'axios';
// import Select from 'react-select';
// import styled from 'styled-components';
// import { Body } from '../Common/Layout';
// import { Colors, Button, FindUnderdog } from '../Common/Styles';
// import { FetchDog } from "../../Api/FetchDog";
// import { AiServer } from '../Common/Path';
// import Underdog from '../../Img/Underdog.png';
// import { Dog, ResponseData } from '../Common/Interface';
// import { ScrollRef, ResultRef } from '../Common/Ref';
// import { BackServer } from '../Common/Path';

// export default function Ai() {
    
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
//     const [dogData, setDogData] = useState<Dog | null>(null);
    
//     const handleOptionChange = (option: any) => {
//         setSelectedOption(option);

//     if (option) {
//       axios
//         .get(`${BackServer}/search?breeds=${decodeURI(option.value)}`)
//         .then((response) => {
//           console.log('response:', response);
//           console.log('response.data:', response.data);
//           setDogData(response.data);
//         })
//         .catch((error) => {
//           console.log('error:', error);
//         });
//     }
        
//         const { id } = useParams<{ id: string }>();
//         const [dog, setDog] = useState<Dog | null>(null);
        
//     useEffect(() => {
//         const handleFetchDog = async () => {
//           try {
//             if (id){ 
//               const response = await FetchDog(id);
//               if (response) {
//                 setDog(response.data)
//                 console.log(response.data);
//               } else {
//                 throw new Error('데이터 패치에 실패했습니다.');
//               } 
//             }
//           } catch (error) {
//             console.error(error);
//           }
//         };
      
//         // API 호출 함수 실행
//         handleFetchDog();
//       }, [id]);




// };
//     return (
//         <>
//             <ScrollRef>
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
//             </ScrollRef>
//             <ResultDiv>
//                 <Select
//                     options={options}
//                     value={selectedOption}
//                     onChange={handleOptionChange}
//                     placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
//                     />
//             </ResultDiv>

//             {/* {dog && (
//                 <ListCircle>
//                     <div><img src={dog.img_url} alt="Dog" /></div>
//                 </ListCircle>
//             )} */}
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
//     margin: 30px 240px 30px 240px;
//     left: 30px;
// `;

// const DragDiv = styled.div`
//     width: 40%;
//     height: 480px;
//     border: 5px dashed ${Colors.main};
//     left: 50%;
//     margin-left: auto;
//     margin-right: auto;
//     margin: 65px auto;
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
//     margin: 40px 270px 0 270px;
//     // margin-left: auto;
//     // margin-right: auto;
//     padding: 10px 50px;
//     border-radius: 300px;
//     top: 120px;
//     cursor: pointer;
//     word-break: keep-all;
//     input {
//         display: none;
//     }
// `;

//     const ResultDiv = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         position: relative;
//         margin: 0 auto;
//         top: 100px;
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
//     top: -90px;
//     cursor: pointer;
//     margin-left: auto;
//     margin-right: auto;
// `;
    
// const Modal = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     margin-bottom: 270px;
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
//     margin-top: 10px;
//     padding: 12px 24px;
//     background-color: ${Colors.main};
//     color: ${Colors.w};
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-family: "Logo";
//     font-size: 15px;
//     margin-left: auto;
//     margin-right: auto;
// `;

// const ListCircle = styled.div`
//     display: flex;
//     justify-content: center;
//     align-item: center;
//     margin-top: 55px;
//     img {
//         width:350px;
//         height:350px;
//         border-radius: 50%;
//         border: 15px solid ${Colors.sub};
//         margin-top: 20px;
//     }
// `


// // import React, { useState, useEffect, useRef } from 'react';
// // import { useParams } from "react-router-dom";
// // import axios, { AxiosError } from 'axios';
// // import Select from 'react-select';
// // import styled from 'styled-components';
// // import { Body } from '../Common/Layout';
// // import { Colors, Button, FindUnderdog } from '../Common/Styles';
// // import { FetchDog } from "../../Api/FetchDog";
// // import { AiServer } from '../Common/Path';
// // import Underdog from '../../Img/Underdog.png';
// // import { Dog, ResponseData } from '../Common/Interface';
// // import { ScrollRef, ResultRef } from '../Common/Ref';
// // import { BackServer } from '../Common/Path';

// // export default function Ai() {
    
// //     // 파일 업로드
// //     const [filename, setFilename] = useState('');
// //     const [showModal, setShowModal] = useState(false);
// //     const [modalMessage, setModalMessage] = useState('');
// //     const [responseData, setResponseData] = useState<string[]>([]);
    
// //     const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
// //         const file = event.target.files?.[0];
// //         if (file) {
// //             console.log(file);
// //             setFilename(file.name);
// //         } else {
// //             console.log('파일이 선택되지 않았습니다.');
// //         }
// //     };

// //     const closeModal = () => {
// //         setShowModal(false);
// //     };

// //     const handleSearch = async () => {
// //         if (filename) {
// //             setModalMessage('');
// //             setShowModal(false);

// //             // 파일 업로드
// //             const fileData = new FormData();
// //             const fileInput = document.querySelector('input[type=file]') as HTMLInputElement | null;
// //             if (fileInput && fileInput.files && fileInput.files[0]) {
// //                 fileData.append('file', fileInput.files[0]);

// //                 try {
// //                     //파일을 AI 서버로 전송하는 POST 요청
// //                     const response = await axios.post<ResponseData>(`${AiServer}`, fileData, {
// //                         headers: {
// //                             'Content-Type': 'multipart/form-data'
// //                         }
// //                     });

// //                     // 응답 처리
// //                     console.log(response.data);
// //                     const responseData = response.data.data;
// //                     responseData.map((item: string) => {
// //                         console.log(item);
// //                     });
// //                     setResponseData(responseData);

// //                 } catch (e) {
// //                     // 오류 처리
// //                     const error = e as AxiosError;
// //                     console.error(error.response?.data || error.message);
// //                 }
// //             } else {
// //                 console.log('파일을 찾을수 없습니다.');
// //             }
// //         } else {
// //             setModalMessage('파일을 먼저 선택해주세요!');
// //             setShowModal(true);
// //         }
// //     };
    
// //     // 하단 스크롤링
// //     const ref = useRef<HTMLDivElement>(null);
    
// //     useEffect(() => {
// //         if (ref.current) {
// //             ref.current.scrollIntoView(
// //                 {
// //                     behavior: 'smooth',
// //                     block: 'start'
// //                 }
// //             );
// //         }
// //     }, [responseData]);

    
// //   const options = responseData.map((item) => ({
// //     value: item,
// //     label: item
// //   }));


// //     const [selectedOption, setSelectedOption] = useState(null);
// //     const [dogData, setDogData] = useState(null);
    
// //     const handleOptionChange = (option: any) => {
// //         setSelectedOption(option);
    
// //         setSelectedOption(option);

// //     if (option) {
// //       axios
// //         .get(`${BackServer}/search?breeds=${decodeURI(option.value)}`)
// //         .then((response) => {
// //           console.log('response:', response);
// //           console.log('response.data:', response.data);
// //           setDogData(response.data);
// //         })
// //         .catch((error) => {
// //           console.log('error:', error);
// //         });
// //         }
// //         const { id } = useParams<{ id: string }>();
// //         const [dog, setDog] = useState<Dog | null>(null);
        
// //         useEffect(() => {

// //         const handleFetchDog = async () => {
// //           try {
// //             if (id){ 
// //               const response = await FetchDog(id);
// //               if (response) {
// //                 setDog(response.data)
// //                 console.log(response.data);
// //               } else {
// //                 throw new Error('데이터 패치에 실패했습니다.');
// //               } 
// //             }
// //           } catch (error) {
// //             console.error(error);
// //           }
// //         };
      
// //         // API 호출 함수 실행
// //         handleFetchDog();
// //       }, [id]);


// // };
// //     return (
// //         <>
// //             <ScrollRef>
// //             <DragDiv>
// //                 <UnderdogImage src={Underdog} />
// //                 <TextDiv>{FindUnderdog}</TextDiv>
// //                 <UploadButton>사진 추가하기
// //                     <input
// //                         type="file"
// //                         accept=".jpg, .jpeg, .png"
// //                         onChange={handleFileInputChange}
// //                     />
// //                 </UploadButton>
// //                 {filename && <p>파일명: {filename}</p>}
// //             </DragDiv>
// //             <SearchButton onClick={handleSearch}>
// //                 AI로 UNDERDOG 검색하기
// //                 </SearchButton>
// //             </ScrollRef>
// //             <ResultDiv>
// //                 <Select
// //                     options={options}
// //                     value={selectedOption}
// //                     onChange={handleOptionChange}
// //                     placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
// //                     />
// //             </ResultDiv>

// //             {dog && (
// //                 <ListCircle>
// //                     <div><img src={dog.img_url} alt="Dog" /></div>
// //                 </ListCircle>
// //             )}
// //             {showModal && (
// //                 <Modal>
// //                     <ModalContent>
// //                         <h3>{modalMessage}</h3>
// //                         <ModalButton onClick={closeModal}>닫기</ModalButton>
// //                     </ModalContent>
// //                 </Modal>
// //             )}
// //     </>
// // )}

// // const UnderdogImage = styled.img`
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     width: 35%;
// //     margin: 30px 240px 30px 240px;
// //     left: 30px;
// // `;

// // const DragDiv = styled.div`
// //     width: 40%;
// //     height: 480px;
// //     border: 5px dashed ${Colors.main};
// //     left: 50%;
// //     margin-left: auto;
// //     margin-right: auto;
// //     margin: 65px auto;
// // `;

// // const TextDiv = styled.div`
// //     width: 100%;
// //     display: flex;
// //     justify-content: center;
// //     text-align: center;
// //     margin: -60px 0 0 10px;
// //     font-size: 32px;
// //     font-weight: bold;
// //     color: ${Colors.main};
// // `;

// // const UploadButton = styled.label`
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     font-family: "Logo";
// //     font-size: 20px;
// //     color: ${Colors.w};
// //     background-color: ${Colors.footer};
// //     margin: 40px 270px 0 270px;
// //     // margin-left: auto;
// //     // margin-right: auto;
// //     padding: 10px 50px;
// //     border-radius: 300px;
// //     top: 120px;
// //     cursor: pointer;
// //     word-break: keep-all;
// //     input {
// //         display: none;
// //     }
// // `;

// //     const ResultDiv = styled.div`
// //         display: flex;
// //         justify-content: center;
// //         align-items: center;
// //         flex-direction: column;
// //         position: relative;
// //         margin: 0 auto;
// //         top: 100px;
// // `;

// // const SearchButton = styled(Button)`
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: relative;
// //     padding: 10px 50px;
// //     border: 1px solid ${Colors.main};
// //     border-radius: 300px;
// //     background-color: ${Colors.main};
// //     color: ${Colors.w};
// //     font-family: "Logo";
// //     font-size: 20px;
// //     top: -90px;
// //     cursor: pointer;
// //     margin-left: auto;
// //     margin-right: auto;
// // `;
    
// // const Modal = styled.div`
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     position: fixed;
// //     margin-bottom: 270px;
// //     left: 0;
// //     width: 100%;
// //     height: 100%;
// //     background-color: ${Colors.w};
// //     font-family: "Text";
// //     font-size: 20px;
// // `;

// // const ModalContent = styled.div`
// //     background-color: ${Colors.w};
// //     padding-bottom: 20px;
// //     border-radius: 5px;
// // `;


// // const ModalButton = styled(Button)`
// //     margin-top: 10px;
// //     padding: 12px 24px;
// //     background-color: ${Colors.main};
// //     color: ${Colors.w};
// //     border: none;
// //     border-radius: 5px;
// //     cursor: pointer;
// //     font-family: "Logo";
// //     font-size: 15px;
// //     margin-left: auto;
// //     margin-right: auto;
// // `;

// // const ListCircle = styled.div`
// //     display: flex;
// //     justify-content: center;
// //     align-item: center;
// //     margin-top: 55px;
// //     img {
// //         width:350px;
// //         height:350px;
// //         border-radius: 50%;
// //         border: 15px solid ${Colors.sub};
// //         margin-top: 20px;
// //     }
// // `