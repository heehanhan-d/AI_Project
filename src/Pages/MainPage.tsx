import React from 'react';
import { Body } from "../Components/Common/Layout";
import BannerComponent from "../Components/Main/Banner";
import SliderComponent from "../Components/Main/Slider";

export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SliderComponent />
        </Body>
    );
};
