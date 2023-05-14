import React from 'react';
import { Body } from "../Components/common/layout";
import BannerComponent from "../Components/Main/BannerComponent";
import SwiperComponent from "../Components/Main/SwiperComponent";


export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SwiperComponent />
        </Body>
    );
};
