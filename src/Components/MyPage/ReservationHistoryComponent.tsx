import React from 'react';

export const ReservationHistory = () => {
    return (
        <>
            예약조회
        </>
    )
}

// import React from 'react';
// immport { getMockFormDataList } from './mockData';

// const showReservationHistory = (userName) => {
//     const formDataList = getMockFormDataList();
//     const filteredDataList = formDataList.filter((formData) => formData.name === userName);

//     // 필터링 된 결과를 출력하는 코드
//     filteredDataList.forEach((formData) => {
//         console.log('--- Reservation ---');
//         console.log('Name:', formData.name);
//         console.log('Phone:', formData.phone);
//         console.log('Date:', formData.when_day);
//         console.log('Time:', formData.when_time);
//         console.log('Dog ID:', formData.dog_id);
//         console.log('Dog Image URL:', formData.dog_img_url);
//         console.log('Care Center Name:', formData.dog_careCenter_name);
//         console.log('Care Center Address:', formData.dog_careCenter_address);
//         console.log('------------------');
//       });
//     };
    
//     // 예시: 사용자 '한다희'의 방문소 예약 내역 보여주기
//     const userName = '한다희';
//     showReservationHistory(userName);
