import React from 'react';
import { DogListProps } from '../Common/Interface';

const DogList: React.FC<DogListProps> = ({ dogList }) => {
  return (
    <div>
      {dogList.map((dog, index) => (
        <div key={dog.id} >
          <h2>{dog.breeds}</h2>
        </div>
      ))}
    </div>
  );
};

export default DogList;