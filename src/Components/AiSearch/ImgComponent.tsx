import React from 'react';

export const DogImg = ({ dog }) => {
  return (
    <div>
      {/* 기타 필요한 정보 출력 */}
      <img src={dog.img_url} alt="Dog" />
    </div>
  );
};


