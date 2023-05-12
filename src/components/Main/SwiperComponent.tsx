import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { colors } from "../common/colors";
import Underdog from "../../Img/Underdog.png";
import { Dog } from '../../interface';


export default function SwiperComponent () {
  const [underdogs, setUnderdogs] = useState<Dog[]>([]);

  useEffect(() => {
    fetchImageUrls().then(data => setUnderdogs(data.data));
  }, []);

  const fetchImageUrls = async () => {
    const response = await fetch('http://localhost:3001/underdogs');
    const data = await response.json();
    return data;
  };

  return (
    <SwiperSlider>
      <Link to="/list" style={{ textDecoration: "none", color: "inherit" }}>
        <UnderdogImage src={Underdog} />
      </Link>
      <CustomSwiper
        modules={[ Navigation, Pagination, Autoplay ]}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop= {true}
        onSwiper={(Swiper) => console.log(Swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {underdogs.map((dog, index) => (
          <SwiperSlide key={index}>
            <img src={dog.img_url} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SwiperSlider>
  );
}


 const SwiperSlider = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1rem solid ${colors.footer};
   position: relative;
   width: 100rem;
   height: 25rem;
   top: 45rem;
   left: 3rem;
   bottom: 50rem;
   margin-bottom: 10rem;

   .swiper-button-prev, .swiper-button-next {
     transform: translateY(-50%);
     width: 1rem;
     height: 1rem;
     background-color: ${colors.footer};
     color: ${colors.w};
     padding: 1.5rem 1.5rem;
     border-radius: 3rem;
     font-size: 5rem;
     margin-top: 0;
   }

   .swiper-button-prev {
     top: 7.5rem;
     left: 1rem;
  }

   .swiper-button-next {
     right: 1rem;
      top: 7.5rem;
    }

    .swiper-button-prev::after, .swiper-button-next::after {
      font-size: 1.1rem !important;
      font-weight: 600 !important;
    }

    .swiper-pagination-bullet {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      border-radius: 100%;
      background: ${colors.main} !important;
    }
   `;


const CustomSwiper = styled(Swiper)`
  width: 55rem;
  height: 5rem;
  position: absolute;
  left: 20rem;
  top: 5rem;
  bottom: 5rem;
  margin-bottom: 5rem;
  border: 0.5rem solid ${colors.main};
  padding: 5rem 10rem;
  text-align: center;
  z-index: 10;
`

const UnderdogImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3rem;
  left: 0rem;
  width: 20rem;
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
// import { colors } from "../../Styles/colors";
// import underdog from "../../Img/underdog.png";


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
//    border: 1rem solid ${colors.footer};
//    position: relative;
//    width: 100rem;
//    height: 25rem;
//    top: 45rem;
//    left: 3rem;
//    bottom: 50rem;
//    margin-bottom: 10rem;

//    .swiper-button-prev, .swiper-button-next {
//      transform: translateY(-50%);
//      width: 1rem;
//      height: 1rem;
//      background-color: ${colors.footer};
//      color: ${colors.w};
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
//       background: ${colors.main} !important;
//     }
//    `;


// const CustomSwiper = styled(Swiper)`
//   width: 55rem;
//   height: 5rem;
//   position: absolute;
//   left: 20rem;
//   top: 5rem;
//   bottom: 5rem;
//   margin-bottom: 5rem;
//   border: 0.5rem solid ${colors.main};
//   padding: 5rem 10rem;
//   text-align: center;
//   z-index: 10;
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
//   z-index: 10;
// `;