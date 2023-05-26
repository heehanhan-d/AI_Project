import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchFormDataList } from '../../Api/FetchFormDataList';
import { FormDataType } from '../Common/Interface';

export const FormManagement: React.FC = () => {

    const [formDataList, setFormDataList] = useState<FormDataType[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    // Mock 데이터 배열 생성
    const getMockFormDataList = (): FormDataType[] => {
        return [
            {
                name: '일번',
                phone: '010-1234-5678',
                when_day: '2023-05-30',
                when_time: '10:00'
            },
            {
                name: '이번',
                phone: '010-8765-4321',
                when_day: '2023-06-03',
                when_time: '18:00'
            }
        ];
    };
    
    const fetchData = async () => {
        try {
            const response = await axios.get('http://kdt-ai6-team07.elicecoding.com:3001/admin/adopts');
            const formDataList = response.data;
            setFormDataList(formDataList);
        } catch (e) {
            console.error(e);
            setFormDataList([]);
        }
        setFormDataList(formDataList);
        console.log(formDataList);
    };

    return (
        <>
            {/* <h1>Welcome, Admin!</h1>
            보호소 방문 신청 폼 전체를 확인할 수 있어야 해. */}
            <h1>전체 폼 데이터 조회</h1>
            <ul>
                {formDataList.length > 0 ? (
                    formDataList.map((formData, index) => (
                        <li key={index}>
                            <p>이름: {formData.name}</p>
                            <p>전화번호: {formData.phone}</p>
                            <p>방문 날짜: {formData.when_day}</p>
                            <p>방문 시간: {formData.when_time}</p>
                        </li>
                    ))
                ) : (
                <ul>
                    {getMockFormDataList().map((formData, index) => (
                        <li key={index}>
                            <p>이름: {formData.name}</p>
                            <p>전화번호: {formData.phone}</p>
                            <p>방문 날짜: {formData.when_day}</p>
                            <p>방문 시간: {formData.when_time}</p>
                        </li>        
                    ))}
                </ul>
                )}
            </ul>
        </>
    )
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { fetchFormDataList } from '../../Api/FetchFormDataList';
// import { FormDataType } from '../Common/Interface';

// export const FormManagement: React.FC = () => {

//     const [formDataList, setFormDataList] = useState<FormDataType[]>([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     // Mock 데이터 배열 생성
//     const getMockFormDataList = (): FormDataType[] => {
//         return [
//             {
//                 name: '일번',
//                 phone: '010-1234-5678',
//                 when_day: '2023-05-30',
//                 when_time: '10:00'
//             },
//             {
//                 name: '이번',
//                 phone: '010-8765-4321',
//                 when_day: '2023-06-03',
//                 when_time: '18:00'
//             }
//         ];
//     };
    
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://kdt-ai6-team07.elicecoding.com:3001/admin/adopts');
//             const formDataList = response.data;
//             setFormDataList(formDataList);
//         } catch (e) {
//             console.error(e);
//             setFormDataList([]);
//         }
//         setFormDataList(formDataList);
//         console.log(formDataList);
//     };

//     return (
//         <>
//             {/* <h1>Welcome, Admin!</h1>
//             보호소 방문 신청 폼 전체를 확인할 수 있어야 해. */}
//             <h1>전체 폼 데이터 조회</h1>
//             <ul>
//                 {formDataList.length > 0 ? (
//                     formDataList.map((formData, index) => (
//                         <li key={index}>
//                             <p>이름: {formData.name}</p>
//                             <p>전화번호: {formData.phone}</p>
//                             <p>방문 날짜: {formData.when_day}</p>
//                             <p>방문 시간: {formData.when_time}</p>
//                         </li>
//                     ))
//                 ) : (
//                     <li>데이터가 없습니다.</li>
//                 )}
//             </ul>
//         </>
//     )
// }