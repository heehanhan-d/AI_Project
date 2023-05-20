import React from 'react';
import DogDetails from './DogDetails';
import { Dog } from '../Common/Interface';




const App: React.FC = () => {

    const dogData = Response.data;
  const dogId = dogData.data;
    console.log(dogId.img_url);
    
    const dogId: Dog = {

//   const dogData: Dog = {
    // 데이터 객체
    // ...
    img_url: 'http://www.animal.go.kr/files/shelter/2023/04/202304281104722[1].jpg',
    };
    
  
  
  return (
    <div>
      {/* 기타 컴포넌트 */}
      <DogDetails dog={dogData} />
    </div>
  );
};

export default App;
