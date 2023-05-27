import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Components/Common/Styles';
import { FetchDogList } from '../Api/FetchDogList';
import { Dog } from '../Components/Common/Interface';
import { DogApiResponse } from '../Components/Common/Interface';
import { Link } from 'react-router-dom';
import Loading from '../Components/DogList/LoadingComponent';

export const DogListPage = () => {
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const results = await FetchDogList(page);
        const data = results.data;
        setDogList((prev) => [...prev, ...data]);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    if (isLoadingMore) {
      fetchData();
      setIsLoadingMore(false);
    }
  }, [isLoadingMore]);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setIsLoadingMore(true);
        setPage((prev) => prev + 1);
      }
    };

    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

    return (
    <>
            <div>
                <ListDiv>
                    {dogList.map((dog) => (
                      <ListCircle key = {dog.id}>
                              <LinkStyle to = {`/list/${dog.id}`}> 
                                    <img src={dog.img_url} alt={`Dog ${dog.id}`}/>
                              </LinkStyle>
                              <LinkStyle to = {`/list/${dog.id}`}> 
                                    <h2>{dog.notice.date_start.toLocaleString()}부터 <br/> 보호하고 있어요</h2>
                              </LinkStyle>
                      </ListCircle>
                        ))}
                </ListDiv>
            </div>
            <div ref = {loader} style = {{ margin: '32px', textAlign: 'center' }}>
            {loading && <div><Loading/></div>}
            </div>
        </>
    );
};

const ListDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin-top: 5px;
`

const ListCircle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
    flex: 1 0 15%;

    h2 {
        text-decoration: none;
        color: ${Colors.footer};
        font-family: 'UI';
        font-size: 15pt;
    }

    img {
        width:190px;
        height:190px;
        border-radius: 50%;
        border: 8px dashed ${Colors.sub};
    }
`
