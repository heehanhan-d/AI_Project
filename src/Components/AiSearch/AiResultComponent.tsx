import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import { Colors, BackServer } from '../Common/Styles';
import { Dog, AiResultProps } from '../Common/Interface';


export default function AiResult({ responseData }: AiResultProps) {

    const responseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (responseRef.current) {
            responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);

    //품종데이터를 백엔드 서버로 요청하는 POST 요청

    // const handleBreedsData = async () => {
    // try {
    // const breeds = await axios.post<FormData>(`${BackServer}/search?limit=20&skip=0&breeds=${firstBreed}&${secondBreed}&${thirdBreed}&${fourthBreed}&${fifthBreed}`, breedsData, 
    //     {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }
    // );
    
    
    const fetchData = async () => {

        const firstBreed = responseData[0]; 
        const secondBreed = responseData[1];
        const thirdBreed = responseData[2];
        const fourthBreed = responseData[3];
        const fifthBreed = responseData[4];

    const formData = new FormData();
    formData.append('breeds', firstBreed);
    formData.append('breeds', secondBreed);
    formData.append('breeds', thirdBreed);
    formData.append('breeds', fourthBreed);
    formData.append('breeds', fifthBreed);

        console.log(formData);
    
        
        const breeds = [firstBreed, secondBreed, thirdBreed, fourthBreed, fifthBreed];
        const breedsString = breeds.join(',');
    formData.append('breeds', breedsString);
    
        
        try {
            const response = await axios.post<FormData>(
                `${BackServer}/search?limit=20&skip=0&breeds=${firstBreed}&${secondBreed}&${thirdBreed}&${fourthBreed}&${fifthBreed}`,
                null,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            // 응답 처리
            const dogBreedsData = Array.from(response.data.values()) as string[];
            console.log(dogBreedsData);
            // dogBreedsData.map((item: string) => {
            //     console.log(item);
            // });
            setBreedsData(dogBreedsData);
        } catch (e) {
            const error = e as AxiosError;
            console.error(error.response?.data || error.message);
        }
    };

    const [breedsData, setBreedsData] = useState<string[]>([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div ref={responseRef}>
            {responseData.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );

    // const SearchResultDiv = styled.div`
    //      display: flex;
    //      align-items: center;
    //      justify-content: center;
    //      border: 1px dashed ${colors.g};
    //      position: relative;
    //      width: 80%;
    //      top: 400px;
    //      background-color: ${colors.w};
    //  `;

    // const AIResultDiv = styled.div`
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin: 5rem;

    //     div {
    //         width: 12.5rem;
    //         height: 12.5rem;
    //         border-radius: 70%;
    //         overflow: hidden;
    //         background-color: ${colors.g};
    //         margin: 5rem;
    //     }
    // `;



    // import React, { useState, useEffect } from 'react';
    // import styled from "styled-components";
    // import { colors } from "../../Styles/colors";


    // export default function AIResultComponent() {
    
    //     // AI 검색 결과
    //     const [showResults, setShowResults] = useState(false);

    //     const [imageUrls, setImageUrls] = useState<string[]>([]);

    //     const handleSearch = () => {
    //         // 가상의 이미지 URL 배열
    //         const dummyImageUrls = [
    //             'https://example.com/image1.jpg',
    //             'https://example.com/image2.jpg',
    //             'https://example.com/image3.jpg',
    //         ];

    //         setImageUrls(dummyImageUrls);
    //         setShowResults(true);
    //     };

    //     return (
    //       <AISearchDiv>
    //         <SearchButton onClick={handleSearch}>AI로 UNDERDOG 검색하기</SearchButton>
    //             {showResults && (
    //                 <SearchResultDiv>
    //                     <AIResultDiv>
    //                         {imageUrls.map((url, index) => (
    //                             <div key={index}>
    //                                 <img src={url} alt={`Result ${index +1}`} />
    //                             </div>
    //                         ))}
    //                     </AIResultDiv>
    //                 </SearchResultDiv>
    //             )}
    //       </AISearchDiv>
    //     );
    // }
  

    // const AISearchDiv = styled.div`
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     flex-direction: column;
    //     position: relative;
    //     float: none;
    //     margin: 0 auto;
    //     top: 5rem;
    // `

    // const SearchButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
    //     display: flex;
    //     justify-contents: center;
    //     align-items: center;
    //     position: relative;
    //     padding: 0.625rem 3.125rem;
    //     border: 0.063rem solid ${colors.main};
    //     border-radius: 18.75rem;
    //     background-color: ${colors.main};
    //     color: ${colors.w};
    //     font-family: "Logo";
    //     font-size: 1.25rem;
    //     top: 15rem;
    //     cursor: pointer;
    // `

    // const SearchResultDiv = styled.div`
    //     position: absolute;
    //     top: 20rem;
    //     left: -28rem;
    //     width: 75rem;
    //     height: 35rem;
    //     background-color: ${colors.w};
    //     border: 1px dashed ${colors.g};
    // `

    // const AIResultDiv = styled.div`
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin: 5rem;

    //     div {
    //         width: 12.5rem;
    //         height: 12.5rem;
    //         border-radius: 70%;
    //         overflow: hidden;
    //         background-color: ${colors.g};
    //         margin: 5rem;
    //     }

    //     img {
    //         width: 100%;
    //         height: 100%;
    //         object-fit: cover;
    //     }
    // `
}
