import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { EffectFade, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
const CarouselSection = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "#aaa",

          fontWeight: 700,
          marginY: "30px",
        }}
      >
        Photos & Highlights
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "auto",
          padding: "30px 50px",
        }}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
          // spaceBetween={30}
          // slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          // effect="fade"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-1.png" width={700} />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-2.png" width={700} />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-3.png" width={700} />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-5.png" width={700} />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-6.png" width={700} />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ objectFit: "cover" }} src="/c-7.png" width={700} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default CarouselSection;
