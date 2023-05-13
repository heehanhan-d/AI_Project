import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../Component/common/colors';
import { FetchDogList } from '../Api/FetchDogList';
import { Dog } from '../Component/common/interface';
import DogList from '../Component/common/dogList';
import { DogApiResponse } from '../Component/common/interface';


export const DogListPage = () => {
    const [dogList, setDogList] = useState<Dog[]>([]);
    // console.log(dogList, 'dogList')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);  

    useEffect(() => {
        const fetch = async () => {
            try {
                const results = await FetchDogList(page);
                const message = results.message;
                const data = results.data;
                setDogList((prev) => [...prev, ...data]);
                setLoading(false);
                console.log("message : ", message);
                console.log("data : ", data);
                // setDogList(data);
            } catch(e) {
                console.error(e);
            }
        }
        fetch();
        // component did mount
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
                setLoading(true);
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);
    
    return(
        <div>
            <h1>Dog List</h1>
            <ListDiv>
                {dogList.map((dog) => (
                <ListCircle key = {dog.id}>
                    <img src={dog.img_url} alt={`Dog ${dog.id}`}/>
                    <h2>{dog.breeds?.join(', ')}</h2>
                    <p>{dog.color}</p>
                    <p>{String(dog.weight)}</p>
                    <p>{dog.found.place}</p>
                    <p>{dog.carecenter?.name}</p>
                </ListCircle>
                ))}
            </ListDiv>
            {loading && <div>Loading...</div>}
        </div>
    );
    // <div>{dogList.map((dog) => (dog.breeds))}</div>
};


const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

const ListCircle = styled.div`
    display: felx;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    background-color: ${colors.g};
    margin: 1rem;
    flex: 1 0 22%;

    img {
        max-width: 100%;
        max-height: 100%;
    }
`