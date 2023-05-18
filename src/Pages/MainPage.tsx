import React from 'react';
import { Body } from '../Components/Common/Layout';
import Banner from '../Components/Main/BannerComponent';
import Slide from '../Components/Main/SliderComponent';

export const MainPage = () => {
    return (
        <Body>
            <Banner />
            <Slide />
        </Body>
    );
};
