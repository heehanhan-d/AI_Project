import React, { useState, useEffect, useRef } from 'react';
import axios, { AxiosError } from 'axios';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { ScrollRef } from '../Common/ScrollRef';
import { BackServer } from '../Common/Path';
import { Dog, DogListProps, AiResultProps } from '../Common/Interface';

export default function AiResult({ responseData }: AiResultProps) {

    const firstBreed = responseData[0];
    const secondBreed = responseData[1];
    const thirdBreed = responseData[2];
    const fourthBreed = responseData[3];
    const fifthBreed = responseData[4];
    
    // 품종데이터로 서버에 요청하기
    axios.get(`${BackServer}/search?breeds=${firstBreed}&breeds=${secondBreed}&breeds=${thirdBreed}&breeds=${fourthBreed}&breeds=${fifthBreed}`)
        .then(function (response) {
            console.log('요청 성공', response);
            console.log('출력 성공', response.data);
        })
        .catch(function (error) {
            console.log('요청 실패', error);
        });
    
    
    const firstBreedData = axios.get<Dog[]>(`${BackServer}/search?breeds=${firstBreed}`)
    console.log('출력', firstBreedData);

    return (
        <ScrollRef>
            {responseData.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </ScrollRef>
    );
}



    
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Colors } from '../Common/Styles';
// import axios from 'axios';
// import { ScrollRef } from '../../Api/ScrollRef';
// import { BackServer } from '../Common/Path'
// import { AiResultProps } from '../Common/Interface';

// export default function AiResult({ responseData }: AiResultProps) {
    
//     const [searchCompleted, setSearchCompleted] = useState(false);

//     const handleAiSearch = async () => {
//         setSearchCompleted(true);
//     };

//     if (searchCompleted) {
//         const firstBreed = responseData[0];
//         const secondBreed = responseData[1];
//         const thirdBreed = responseData[2];
//         const fourthBreed = responseData[3];
//         const fifthBreed = responseData[4];

//     axios
//         .get(`${BackServer}/search?breeds=${firstBreed}&breeds=${secondBreed}&breeds=${thirdBreed}&breeds=${fourthBreed}&breeds=${fifthBreed}`)
//         .then(function (response) {
//             console.log('요청 성공', response);
//             console.log('출력 성공', response.data);
//         })
//         .catch(function (error) {
//             console.log('요청 실패', error);
//         });
//     }

    

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
