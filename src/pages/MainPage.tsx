import React from 'react';
import { Body } from "../components/common/layout";
import BannerComponent from "../components/Main/Banner";
import SwiperComponent from "../components/Main/Swiper";


export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SwiperComponent />
        </Body>
    );
};
