import React from 'react';
import styled from 'styled-components';
import { Body } from '../Components/Common/Layout';
import AdminComponent from '../Components/Admin/AdminComponent';
import { DogProfile } from '../Components/DogDetail/DogProfile';
import  Adopt from '../Components/DogDetail/AdoptComponent';
import ReservationForm from '../Components/DogDetail/ReservationFormComponent';
import { Colors } from '../Components/Common/Styles';

export const DogDetailPage = () => {
    return(
    <>
        <Adopt />
        {/* <ReservationForm /> */}
    </>
    );
};


const ListCircle = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    h2 {
        text-decoration: none;
        color: ${Colors.footer};
    }
    img {
        width:450px;
        height:450px;
        border-radius: 50%;
        border: 20px solid ${Colors.sub};
    }
`

const Table = styled.table`
    margin-left: 50px;
    width: 45%;
`;

const Th = styled.th`
    width: 15%;
    background-color: ${Colors.sub};
    text-align: center;
    font-family: 'Logo';
    font-size: 18px;
    border: none;
    border-radius: 15px;
`;

const Td = styled.td`
    text-align: left;
    border: ${Colors.sub} dashed 2px;
    border-radius: 15px;
    padding: 15px;
    font-family: 'Text';
    font-size: 20px;
    width: 1200px;
`;

