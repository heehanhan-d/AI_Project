import React from 'react';
import { Body } from "../Component/common/layout";
import BannerComponent from "../Component/Main/BannerComponent";
import SwiperComponent from "../Component/Main/SwiperComponent";


export const MainPage = () => {
    return (
        <Body>
            <BannerComponent />
            <SwiperComponent />
        </Body>
    );
};
