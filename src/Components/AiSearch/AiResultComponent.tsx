import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import styled from 'styled-components';
import { Colors } from '../Common/Styles';
import { ScrollRef } from '../Common/Ref';
import { BackServer } from '../Common/Path';
import { Dog, DogListProps, AiResultProps } from '../Common/Interface';

export default function AiResult({ responseData }: AiResultProps) {
  const [selectedOption, setSelectedOption] = useState(null);
  // const [dogData, setDogData] = useState([]);
  //   console.log('dogData:', dogData);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);

    if (option) {
      axios
        .get(`${BackServer}/search?breeds=${option.value}`)
        .then((response) => {
          console.log('response:', response);
          console.log('response.data:', response.data);
          // setDogData(response.data);
        })
        .catch((error) => {
          console.log('error:', error);
        });
    }
  };

  const options = responseData.map((item) => ({
    value: item,
    label: item
  }));

  return (
    <div>
      <ScrollRef>
        <Select
          options={options}
          value={selectedOption}
          onChange={handleOptionChange}
          placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
        />
      </ScrollRef>
      </div>
  );
}

const ResultDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${Colors.s};
  position: relative;
  width: 80%;
  top: 400px;
  background-color: ${Colors.w};
`;

const AIResultDiv = styled.div`
  display: flex;
  flext-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px;

  div:first-child {
    width: 200px;
    height: 200px;
    border-radius: 70%;
    overflow: hidden;
    background-color: ${Colors.s};
    margin-right: 80px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}`


// import React, { useState, useEffect, useRef } from 'react';
// import axios, { AxiosError } from 'axios';
// import styled from 'styled-components';
// import { Colors } from '../Common/Styles';
// import { ScrollRef } from '../Common/Ref';
// import { BackServer } from '../Common/Path';
// import { Dog, DogListProps, AiResultProps } from '../Common/Interface';

// export default function AiResult({ responseData }: AiResultProps) {

//     const firstBreed = responseData[0];
//     const secondBreed = responseData[1];
//     const thirdBreed = responseData[2];
//     const fourthBreed = responseData[3];
//     const fifthBreed = responseData[4];
    
//     // 품종데이터로 서버에 요청하기
//     axios.get(`${BackServer}/search?breeds=${firstBreed}&breeds=${secondBreed}&breeds=${thirdBreed}&breeds=${fourthBreed}&breeds=${fifthBreed}`)
//         .then(function (response) {
//             console.log('요청 성공', response);
//             console.log('출력 성공', response.data);
//         })
//         .catch(function (error) {
//             console.log('요청 실패', error);
//         });
    
    
//     return (
//         <ScrollRef>
//             {responseData.map((item, index) => (
//                 <p key={index}>{item}</p>
//             ))}
//         </ScrollRef>
//     );
// }
    
//     const SearchResultDiv = styled.div`
//          display: flex;
//          align-items: center;
//          justify-content: center;
//          border: 1px dashed ${Colors.s};
//          position: relative;
//          width: 80%;
//          top: 400px;
//          background-color: ${Colors.w};
//      `;

//     const AIResultDiv = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         margin: 5rem;

//         div {
//             width: 12.5rem;
//             height: 12.5rem;
//             border-radius: 70%;
//             overflow: hidden;
//             background-color: ${Colors.s};
//             margin: 5rem;
//         }
//     `;


// import React, { useState } from 'react';
// import axios from 'axios';
// import Select from 'react-select';
// import styled from 'styled-components';
// import { Colors } from '../Common/Styles';
// import { ScrollRef } from '../Common/Ref';
// import { BackServer } from '../Common/Path';
// import { Dog, DogListProps, AiResultProps } from '../Common/Interface';

// export default function AiResult({ responseData }: AiResultProps) {
//   const [selectedOption, setSelectedOption] = useState(null);
//   // const [dogData, setDogData] = useState([]);
//   //   console.log('dogData:', dogData);

//   const handleOptionChange = (option: any) => {
//     setSelectedOption(option);

//     if (option) {
//       axios
//         .get(`${BackServer}/search?breeds=${option.value}`)
//         .then((response) => {
//           console.log('response:', response);
//           console.log('response.data:', response.data);
//           // setDogData(response.data);
//         })
//         .catch((error) => {
//           console.log('error:', error);
//         });
//     }
//   };

//   const options = responseData.map((item) => ({
//     value: item,
//     label: item
//   }));

//   return (
//     <div>
//       <ScrollRef>
//         <Select
//           options={options}
//           value={selectedOption}
//           onChange={handleOptionChange}
//           placeholder='AI로 검색된 Underdog의 특성을 골라보세요.'
//         />
//       </ScrollRef>
//       </div>
//   );
// }

// const ResultDiv = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px dashed ${Colors.s};
//   position: relative;
//   width: 80%;
//   top: 400px;
//   background-color: ${Colors.w};
// `;

// const AIResultDiv = styled.div`
//   display: flex;
//   flext-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 80px;

//   div:first-child {
//     width: 200px;
//     height: 200px;
//     border-radius: 70%;
//     overflow: hidden;
//     background-color: ${Colors.s};
//     margin-right: 80px;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// }`


// // import React, { useState, useEffect, useRef } from 'react';
// // import axios, { AxiosError } from 'axios';
// // import styled from 'styled-components';
// // import { Colors } from '../Common/Styles';
// // import { ScrollRef } from '../Common/Ref';
// // import { BackServer } from '../Common/Path';
// // import { Dog, DogListProps, AiResultProps } from '../Common/Interface';

// // export default function AiResult({ responseData }: AiResultProps) {

// //     const firstBreed = responseData[0];
// //     const secondBreed = responseData[1];
// //     const thirdBreed = responseData[2];
// //     const fourthBreed = responseData[3];
// //     const fifthBreed = responseData[4];
    
// //     // 품종데이터로 서버에 요청하기
// //     axios.get(`${BackServer}/search?breeds=${firstBreed}&breeds=${secondBreed}&breeds=${thirdBreed}&breeds=${fourthBreed}&breeds=${fifthBreed}`)
// //         .then(function (response) {
// //             console.log('요청 성공', response);
// //             console.log('출력 성공', response.data);
// //         })
// //         .catch(function (error) {
// //             console.log('요청 실패', error);
// //         });
    
    
// //     return (
// //         <ScrollRef>
// //             {responseData.map((item, index) => (
// //                 <p key={index}>{item}</p>
// //             ))}
// //         </ScrollRef>
// //     );
// // }
    
// //     const SearchResultDiv = styled.div`
// //          display: flex;
// //          align-items: center;
// //          justify-content: center;
// //          border: 1px dashed ${Colors.s};
// //          position: relative;
// //          width: 80%;
// //          top: 400px;
// //          background-color: ${Colors.w};
// //      `;

// //     const AIResultDiv = styled.div`
// //         display: flex;
// //         justify-content: center;
// //         align-items: center;
// //         margin: 5rem;

// //         div {
// //             width: 12.5rem;
// //             height: 12.5rem;
// //             border-radius: 70%;
// //             overflow: hidden;
// //             background-color: ${Colors.s};
// //             margin: 5rem;
// //         }
// //     `;
