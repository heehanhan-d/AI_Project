import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Colors } from "../Common/Colors";
import Underdog from "../../Img/Underdog.png";
import { Dog } from '../Common/Interface';
import { fetchImageUrls } from '../../Api/FetchImageUrl';
import { LIST_PATH } from '../Common/Path';


export default function Slider() {
  const [underdogs, setUnderdogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetchImageUrls().then(data => setUnderdogs(data.data));
  }, []);

  return (
    <SwiperSlider>
      <UnderdogImageLink to={LIST_PATH}>
        <UnderdogImage src={Underdog} />
      </UnderdogImageLink>
      <CustomSwiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={-45}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        onSwiper={(Swiper) => console.log(Swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {underdogs.map((dog, index) => (
          <CustomerSwiperSlide key={index}>
            <img src={dog.img_url} alt={`Slide ${index}`} />
          </CustomerSwiperSlide>
        ))}
      </CustomSwiper>
    </SwiperSlider>
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
   top: 720px;
   bottom: 800px;
   margin-bottom: 160px;
   background-color: ${Colors.sub};
   `;


const CustomSwiper = styled(Swiper)`
  width: 70%;
  height: 300px;
  position: absolute;
  left: 360px;
  margin-left: 30px;
  padding: 0 20px 0 20px;
  background-color: ${Colors.sub};
  text-align: center;
  // z-index: 10;


  .swiper-button-prev, .swiper-button-next {
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: ${Colors.main};
    color: ${Colors.w};
    padding: 15px 15px;
    border-radius: 50px;
    text-align: center;
    margin: 5px -10px 0 -10px;
    position: absolute;
    top: 50%;
  }

  .swiper-button-prev::after {
    content: "←";
    left: -10px;
    font-family: "Logo";
    font-size: 30px;
    font-weight: 700;
 }

  .swiper-button-next::after {
    content: "→";
    right: -10px;
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
    margin: 0 30px 0 30px;
  }
`

const UnderdogImageLink = styled(Link)`
  text-decoraton: none;
  color: inherit;
`

const UnderdogImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  left: 10px;
  width: 20%;
  height: auto;
  z-index: 10;
`;




// import React from 'react';
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { Colors } from "../Common/Colors";
// import underdog from "../../Img/Underdog.png";


// export default function SwiperComponent () {
//   return (
//     <SwiperSlider>
//       <Link to="/list" style={{ textDecoration: "none", color: "inherit" }}>
//         <UnderdogImage src={underdog} />
//       </Link>
//       <CustomSwiper
//         modules={[ Navigation, Pagination, Autoplay ]}
//         slidesPerView={3}
//         spaceBetween={50}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false
//         }}
//         loop= {true}
//         onSwiper={(Swiper) => console.log(Swiper)}
//         onSlideChange={() => console.log('slide change')}
//       >
//         <SwiperSlide>1</SwiperSlide>
//         <SwiperSlide>2</SwiperSlide>
//         <SwiperSlide>3</SwiperSlide>
//         <SwiperSlide>4</SwiperSlide>
//         <SwiperSlide>5</SwiperSlide>
//         <SwiperSlide>6</SwiperSlide>
//       </CustomSwiper>
//     </SwiperSlider>
//   );
// }


//  const SwiperSlider = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    border: 1rem solid ${Colors.footer};
//    position: absolute;
//    width: 86%;
//    height: 400px;
//    margin-top: 500px;
//    left: 20px;
//    transform: translate(-50%, -50%);
//    align-item: center;
//    margin: 10rem 0;

//    .swiper-button-prev, .swiper-button-next {
//      transform: translateY(-50%);
//      width: 1rem;
//      height: 1rem;
//      background-color: ${Colors.footer};
//      color: ${Colors.w};
//      padding: 1.5rem 1.5rem;
//      border-radius: 3rem;
//      font-size: 5rem;
//      margin-top: 0;
//    }

//    .swiper-button-prev {
//      top: 7.5rem;
//      left: 1rem;
//   }

//    .swiper-button-next {
//      right: 1rem;
//       top: 7.5rem;
//     }

//     .swiper-button-prev::after, .swiper-button-next::after {
//       font-size: 1.1rem !important;
//       font-weight: 600 !important;
//     }

//     .swiper-pagination-bullet {
//       width: 1rem;
//       height: 1rem;
//       display: inline-block;
//       border-radius: 100%;
//       background: ${Colors.main} !important;
//     }
//    `;


// const CustomSwiper = styled(Swiper)`
//   width: 55rem;
//   height: 5rem;
//   position: absolute;
//   left: 20rem;
//   top: 4.5rem;
//   border: 0.5rem solid ${Colors.main};
//   padding: 5rem 10rem;
//   text-align: center;
// `

// const UnderdogImage = styled.img`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 3rem;
//   left: 0rem;
//   width: 20rem;
//   height: auto;
//   // border: 1rem solid ${Colors.main};
// `;
