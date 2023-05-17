import React from 'react';
import { Body } from '../Components/Common/Layout';
import BannerComponent from '../Components/Main/BannerComponent';
import SliderComponent from '../Components/Main/SliderComponent';

export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SliderComponent />
        </Body>
    );
};
