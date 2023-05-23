import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Colors, LinkStyle } from '../Common/Styles';
import Underdog from "../../Img/Underdog.png";
import { Dog } from '../Common/Interface';
// import { fetchImageUrls } from '../../Api/FetchImageUrl';
import { LIST_PATH } from '../Common/Path';


export default function Slide() {
  const [underdogs, setUnderdogs] = useState<Dog[]>([]);

  useEffect(() => {

    const fetchImageUrls = async () => {
      const response = await fetch('http://localhost:3001/underdogs?limit=20&skip=20');
      const data = await response.json();
      return data;
    };

    fetchImageUrls().then(data => setUnderdogs(data.data));
  }, []);

  console.log(underdogs, 'underdogs')

  return (
    <>
    <SwiperSlider>
      <LinkStyle to={LIST_PATH}>
        <UnderdogImage src={Underdog} />
      </LinkStyle>
      <CustomSwiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={-60}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        onSwiper={(Swiper) => console.log(Swiper)}
        onSlideChange={(Swiper) => console.log('slide change')}
      >
        {underdogs.map((dog, index) => (
          <CustomerSwiperSlide key={index}>
            <img src={dog.img_url} alt={`Slide ${index}`} />
          </CustomerSwiperSlide>
          ))}
      </CustomSwiper>
      </SwiperSlider>
    </>
  );
}

 const SwiperSlider = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 15px solid ${Colors.main};
   position: relative;
   width: 90%;
   height: 400px;
   margin: 300px auto;
   top: -50px;
   background-color: ${Colors.sub};
   `;


const CustomSwiper = styled(Swiper)`
  width: 75%;
  height: 300px;
  position: absolute;
  left: 300px;
  margin-left: 30px;
  padding: 0 20px 0 20px;
  background-color: ${Colors.sub};
  text-align: center;
  // z-index: 10;


  .swiper-button-prev, .swiper-button-next {
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: ${Colors.w};
    color: ${Colors.main};
    padding: 15px 15px;
    border-radius: 50px;
    text-align: center;
    margin-top: 5px;
    position: absolute;
    top: 50%;
  }

  .swiper-button-prev::after {
    content: "←";
    left: 2px;
    font-family: "Logo";
    font-size: 30px;
    font-weight: 700;
 }

  .swiper-button-next::after {
    content: "→";
    left: 2px;
    font-family: "Logo";
    font-size: 30px;
    font-weight: 700;
  }
`

const CustomerSwiperSlide = styled(SwiperSlide)`
  img{
    width: 280px;
    height: 280px;
    border: 10px solid ${Colors.w};
  }
`

const UnderdogImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: -20px;
  width: 20%;
  height: auto;
  z-index: 10;
`;
