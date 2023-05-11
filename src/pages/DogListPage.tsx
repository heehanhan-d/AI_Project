import React, { useState, useEffect }  from 'react';
import { fetchDogList } from "../API/FetchDogList";
import { Dog } from "../interface";

export const DogListPage = () => {
    const [dogList, setDogList] = useState<Dog[]>([]); 
    console.log(dogList, 'dogList');

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchDogList();
                console.log(data, 'data');
                setDogList(data);
            } catch (e) {
                console.error(e);
            }
        }       
        fetch();
        // componentDidMount
    }, []);

    // return <div>{dogList.map((dog) => <DogCard dog={dog} />)}</div>;
    return <div>{dogList.map((dog) => (dog.breeds))}</div>;
};

// export const DogCard = ({ dog }) => {
//     return <div>{dog.name}</div>
// }