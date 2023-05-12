import React from 'react';
import { Dog } from '../../interface';

type Props = {
  dogList: Dog[];
};

const DogList: React.FC<Props> = ({ dogList }) => {
  return (
    <div>
      {dogList.map((dog, index) => (
        <div key={String(dog.id) || String(index)} >
          <h2>{dog.breeds}</h2>
        </div>
      ))}
    </div>
  );
};

export default DogList;