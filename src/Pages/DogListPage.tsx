import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Colors } from '../Components/Common/Colors';
import { FetchDogList } from '../Api/FetchDogList';
import { Dog } from '../Components/Common/Interface';
import DogList from '../Components/DogList/DogList';
import { DogApiResponse } from '../Components/Common/Interface';
import { Body } from '../Components/Common/Layout';


export const DogListPage = () => {
    const [dogList, setDogList] = useState<Dog[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); 
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const loader = useRef<HTMLDivElement>(null);

    const resultRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, []);

    useEffect(() => {
        const fetch = async () => {
            try {
                const results = await FetchDogList(page);
                // const message = results.message;
                const data = results.data;
                setDogList((prev) => [...prev, ...data]);
                setLoading(false);
                // console.log("message : ", message);
                // console.log("data : ", data);
                // setDogList(data);
            } catch(e) {
                console.error(e);
            }
        }
        fetch();
        // component did mount
    }, [page]);

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting && !isLoadingMore) {
                setIsLoadingMore(true);
                setLoading(true);
                setTimeout(() => {
                    setPage((prev) => prev + 1);
                    setIsLoadingMore(false);
                    setLoading(false);
                }, 3000);
            }
        };

        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }
        return () => {
            if (loader.current) {
                observer.observe(loader.current);
            }
        }
    }, [isLoadingMore]);

    return(
        <Body>
            <h1 ref={resultRef}>Dog List</h1>
            <ListDiv>
                {dogList.slice(0, page * 20).map((dog) => (
                    <ListCircle key={dog.id}>
                        <div>
                            <img src={dog.img_url} alt={`Dog ${dog.id}`} />
                            <h2>{dog.notice.date_start.toLocaleString()}부터 <br /> 보호하고 있어요</h2>
                        </div>
                    </ListCircle>
                ))}
            </ListDiv>
            <div ref={loader} style={{margin: '2rem', textAlign: 'center'}}>
                {loading && <div>Loading...</div>}
            </div>
        </Body>
    );
};


const ListDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

const ListCircle = styled.div`
    display: felx;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${Colors.s};
    margin: 1rem;
    flex: 1 0 18%;

    img {
        max-width: 200px;
        max-height: 200px;
    }
`
