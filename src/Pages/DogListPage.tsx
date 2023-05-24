// import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';
// import { Colors, LinkStyle } from '../Components/Common/Styles';
// import { FetchDogList } from '../Api/FetchDogList';
// import { Dog } from '../Components/Common/Interface';
// import { DogApiResponse } from '../Components/Common/Interface';
// import { Link } from 'react-router-dom';

// export const DogListPage = () => {
//   const [dogList, setDogList] = useState<Dog[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [isLoadingMore, setIsLoadingMore] = useState(false);
//   const loader = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const results = await FetchDogList(page);
//         const data = results.data;
//         setDogList((prev) => [...prev, ...data]);
//       } catch (e) {
//         console.error(e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (isLoadingMore) {
//       fetchData();
//       setIsLoadingMore(false);
//     }
//   }, [isLoadingMore]);

//   useEffect(() => {
//     const handleObserver = (entries: IntersectionObserverEntry[]) => {
//       const target = entries[0];
//       if (target.isIntersecting && !loading) {
//         setIsLoadingMore(true);
//         setPage((prev) => prev + 1);
//       }
//     };

//     const options = {
//       root: null,
//       rootMargin: '20px',
//       threshold: 0,
//     };

//     const observer = new IntersectionObserver(handleObserver, options);
//     if (loader.current) {
//       observer.observe(loader.current);
//     }
//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current);
//       }
//     };
//   }, []);

//     return (
//     <>
//             <div>
//                 <ListDiv>
//                     {dogList.map((dog) => (
//                         <LinkStyle key = {dog.id} to = {`/list/${dog.id}`}>
//                             <ListCircle>
//                                 <div>
//                                     <img src={dog.img_url} alt={`Dog ${dog.id}`}/>
//                                     <h2>{dog.notice.date_start.toLocaleString()}부터 <br/> 보호하고 있어요</h2>
//                                 </div>
//                             </ListCircle>
//                         </LinkStyle>
//                         ))}
//                 </ListDiv>
//             </div>
//             <div ref = {loader} style = {{ margin: '32px', textAlign: 'center' }}>
//             {loading && <div>Loading...</div>}
//             </div>
//         </>
//     );
// };

// const ListDiv = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//     flex-wrap: wrap;
//     width: 100%;
//     justify-content: center;
// `

// const ListCircle = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin: 16px;
//     flex: 1 0 18%;

//     h2 {
//         text-decoration: none;
//         color: ${Colors.footer};
//     }

//     img {
//         width:200px;
//         height:200px;
//         border-radius: 50%;
//         border: 0.5rem dashed ${Colors.sub};
//     }
// `

// const DogListDiv = styled.div`
//     display: flex;
//     margin-top: 300px;
//     margin-left: 800px;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
// `


import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Colors, LinkStyle } from '../Components/Common/Styles';
import { FetchDogList } from '../Api/FetchDogList';
import { Dog } from '../Components/Common/Interface';
import { DogApiResponse } from '../Components/Common/Interface';
import { Link } from 'react-router-dom';

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
                        <LinkStyle key = {dog.id} to = {`/list/${dog.id}`}> 
                            <ListCircle>
                                <div>
                                    <img src={dog.img_url} alt={`Dog ${dog.id}`}/>
                                    <h2>{dog.notice.date_start.toLocaleString()}부터 <br/> 보호하고 있어요</h2>
                                </div>
                            </ListCircle>
                        </LinkStyle>
                        ))}
                </ListDiv>
            </div>
            <div ref = {loader} style = {{ margin: '32px', textAlign: 'center' }}>
            {loading && <div>Loading...</div>}
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
`

const ListCircle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px;
    flex: 1 0 18%;

    h2 {
        text-decoration: none;
        color: ${Colors.footer};
    }

    img {
        width:200px;
        height:200px;
        border-radius: 50%;
        border: 0.5rem dashed ${Colors.sub};
    }
`

const DogListDiv = styled.div`
    display: flex;
    margin-top: 300px;
    margin-left: 800px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
