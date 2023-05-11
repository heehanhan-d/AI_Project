import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { colors } from "../../Styles/colors";


export default function AIResultComponent() {
    
    // AI 검색 결과
    const [showResults, setShowResults] = useState(false);

    const handleSearch = () => {
        setShowResults(true);
    };

    return (
      <AISearchDiv>
        <SearchBtn onClick={handleSearch}>AI로 UNDERDOG 검색하기</SearchBtn>
            {showResults && (
                <SearchResults>{}</SearchResults>
            )}
      </AISearchDiv>
    );
  }
  

const AISearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    float: none;
    margin: 0 auto;
    top: 5rem;
`

const SearchBtn = styled.button`
    display: flex;
    justify-contents: center;
    align-items: center;
    position: relative;
    padding: 0.625rem 3.125rem;
    border: 0.063rem solid ${colors.main};
    border-radius: 18.75rem;
    background-color: ${colors.main};
    color: ${colors.w};
    font-family: "Logo";
    font-size: 1.25rem;
    top: 15rem;
    cursor: pointer;
`

const SearchResults = styled.div`
    position: absolute;
    top: 20rem;
    left: -28rem;
    width: 75rem;
    height: auto;
    background-color: ${colors.w};
    border: 1px dashed ${colors.g};
`