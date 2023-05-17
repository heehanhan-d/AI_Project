import React, { useEffect } from 'react';
import { DogListProps } from '../Common/Interface';
import { ScrollRef } from '../Common/ScrollRef';

const DogList: React.FC<DogListProps> = ({ dogList }) => {
  return (
    <ScrollRef>
      {dogList.map((dog, index) => (
        <div key={dog.id} >
          <h2>{dog.breeds}</h2>
        </div>
      ))}
    </ScrollRef>
  );
};

export default DogList;
