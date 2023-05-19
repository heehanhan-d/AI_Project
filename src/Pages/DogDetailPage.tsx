import React from 'react';
import styled from 'styled-components';
import { Body } from '../Components/Common/Layout';
import AdminComponent from '../Components/Admin/Admin';
import { DogProfile } from '../Components/DogDetail/DogPropfile';
import { Adopt } from '../Components/DogDetail/AdoptComponent'

export const DogDetailPage = () => {
    return(
    <Body>
        <DogProfile />
        <Adopt />
    </Body>
    );
};

