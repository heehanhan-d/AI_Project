import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { colors } from "../common/colors";
import { Body } from '../common/layout';
import { AiResultComponentProps } from '../common/interface';


export default function AiResultComponent({ responseData }: AiResultComponentProps) {
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);

    return (
    <div>
        <div ref={resultRef}>
            {responseData.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    </div>
    );
}

const ResultComponent = styled(AiResultComponent)`
    display: none;
`


    // const SearchResultDiv = styled.div`
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     border: 1px dashed ${colors.g};
    //     position: relative;
    //     width: 80%;
    //     top: 400px;
    //     background-color: ${colors.w};
    // `;

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
// `;
