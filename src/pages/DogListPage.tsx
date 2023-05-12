import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../Components/common/colors';
import { fetchDogList } from '../Api/FetchDogList';
import { Dog } from '../interface';
import DogList from '../Components/common/dogList';
import { DogApiResponse } from '../interface';


export const DogListPage = () => {
    const [dogList, setDogList] = useState<Dog[]>([]);
    
    console.log(dogList, 'dogList')

    useEffect(() => {
        const fetch = async () => {
            try {
                const results = await fetchDogList();
                const message = results.message
                const data = results.data
                console.log("message : ", message)
                console.log("data : ", data);
                setDogList(data);
            } catch(e) {
                console.error(e);
            }
        }
        fetch();
        // component did mount
    }, []);

    return(
        <div>
            <h1>Dog List</h1>
            <ListDiv>
                <ListCircle></ListCircle>
                <ListCircle></ListCircle>
                <ListCircle></ListCircle>
                <ListCircle></ListCircle>
            </ListDiv>
            
            <DogList dogList = {dogList} />
            <div>
                {dogList.map((dog) => (
                    <div key = {dog.id} >
                        <img src={dog.img_url} alt={`Dog ${dog.id}`} />
                        <h2>{dog.breeds?.join(', ')}</h2>
                        <p>{dog.color}</p>
                        <p>{dog.weight}</p>
                        <p>{dog.found.place}</p>
                        <p>{dog.carecenter?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
    // <div>{dogList.map((dog) => (dog.breeds))}</div>;
};


const ListDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const ListCircle = styled.div`
    display: felx;
    float: left;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: ${colors.g};
    margin: 0 1rem;
`