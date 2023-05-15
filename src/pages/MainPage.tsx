import React from 'react';
import { Body } from "../Components/Common/Layout";
import BannerComponent from "../Components/Main/Banner";
import SlideComponent from "../Components/Main/Slide";


export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SlideComponent />
        </Body>
    );
};
