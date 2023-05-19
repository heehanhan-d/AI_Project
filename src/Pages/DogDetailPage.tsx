import React from 'react';
import styled from 'styled-components';
import { Body } from '../Components/Common/Layout';
import AdminComponent from '../Components/Admin/Admin';
import { DogProfile } from '../Components/DogDetail/DogProfile';
import { Adopt } from '../Components/DogDetail/AdoptComponent'
import ReservationForm from '../Components/DogDetail/ReservationFormComponent';

export const DogDetailPage = () => {
    return(
    <>
        <Adopt />
        {/* <ReservationForm /> */}
    </>
    );
};




//  import React, { useState, useEffect } from "react";
// import { FetchDog } from "../Api/FetchDog";
// import { Dog } from '../Components/Common/Interface';
// import { useParams } from "react-router-dom";
// import styled from 'styled-components';
// import { Body } from '../Components/Common/Layout';
// import AdminComponent from '../Components/Admin/Admin';
// import { DogProfile } from '../Components/DogDetail/DogProfile';
// import { Adopt } from '../Components/DogDetail/AdoptComponent'
// import { Colors } from "../Components/Common/Styles";
// import { ScrollRef } from "../Components/Common/Ref";

// export const DogDetailPage = () => {

//     const [shownAdoptInfo, setShownAdoptInfo] = useState(false);
//     const [dog, setDog] = useState<Dog | null>(null);
//     const { id } = useParams<{id:string}>();

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

//     return (
//         <>
//         <ScrollRef>
//         {dog && (
//           <ListCircle>
//             <div><img src={dog.img_url} alt="Dog" /></div>
//             <Table>
//             <tbody>
//                 <tr>
//                     <Th>발견 장소</Th>
//                     <Td>{dog.found.place}</Td>
//                 </tr>
//                 <tr>
//                     <Th>보호소</Th>
//                     <Td>{dog.careCenter?.name}</Td>
//                 </tr>
//                 <tr>
//                     <Th>보호소 주소</Th>
//                     <Td>{dog.careCenter?.address}</Td>
//                 </tr>
//                 <tr>
//                     <Th>성별</Th>
//                     <Td>
//                         {dog.sex === "W" ? "여" : dog.sex === "M" ? "남" : "미상"}
//                     </Td>
//                 </tr>
//                 <tr>
//                     <Th>중성화여부</Th>
//                     <Td>{dog.neuter === "N" ? "X" : "O"}</Td>
//                 </tr>
//                 <tr>
//                     <Th>MEMO</Th>
//                     <Td>{dog.memo}</Td>
//                 </tr>
//                 <tr>
//                     <Th>친구일지도<br/>몰라요</Th>
//                     <Td>{dog.breeds?.join(" 🐶 ")}</Td>
//                 </tr>
//             </tbody>
//         </Table>
//         </ListCircle>
//       )}
//             </ScrollRef>
//             <Adopt />

//         </>
//     );
// };

// const ListCircle = styled.div`
//     display: flex;
//     justify-content: center;
//     align-item: center;
//     h2 {
//         text-decoration: none;
//         color: ${Colors.footer};
//     }
//     img {
//         width:450px;
//         height:450px;
//         border-radius: 50%;
//         border: 20px solid ${Colors.sub};
//     }
// `

// const Table = styled.table`
//     margin-left: 50px;
//     width: 45%;
// `;

// const Th = styled.th`
//     width: 15%;
//     background-color: ${Colors.sub};
//     text-align: center;
//     font-family: 'Logo';
//     font-size: 18px;
//     border: none;
//     border-radius: 15px;
// `;

// const Td = styled.td`
//     text-align: left;
//     border: ${Colors.sub} dashed 2px;
//     border-radius: 15px;
//     padding: 15px;
//     font-family: 'Text';
//     font-size: 20px;
//     width: 1200px;
// `;

