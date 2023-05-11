import React from 'react';
import { Body } from "../components/common/layout";
import BannerComponent from "../components/Main/BannerComponent";
import SwiperComponent from "../components/Main/SwiperComponent";


export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SwiperComponent />
        </Body>
    );
};
