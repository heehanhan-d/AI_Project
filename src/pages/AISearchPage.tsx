import React from 'react';
import styled from "styled-components";
import picture from "../Img/find.png";

const SearchDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PictureDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Picture = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 400px;
    padding: 50px;
`

const ButtonDiv = styled.button`
    display: flex;
    justify-contents: center;
    align-items: center;
`

const DragDiv = styled.div`
    width: 400px;
    border: 1px dashed #FED159;
    border-width: 5px;
    padding: 80px 300px; 
    margin: 100px -100px;
`

export const AISearchPage = () => {
    return (
        <SearchDiv>
            <div>
                <PictureDiv>
                    <Picture src={picture} />
                </PictureDiv>
                <ButtonDiv>
                    <div className="button">
                        <button className="picture">사진 추가하기</button> 
                    </div>
                </ButtonDiv>
                <DragDiv>
                    <p>
                        찾고 싶은 강아지 사진을 넣어보세요.
                    </p>
                </DragDiv>
            </div>
        </SearchDiv> 
    );
};

