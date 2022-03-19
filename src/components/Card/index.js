import React, { useRef, useState } from "react";
import "./index.scss";
import Wood from "../../assets/Rectangle 15.png";
import Woods from "../../assets/Rectangle 17.png";
import Gorciqner from "../../assets/Rectangle 18.png";
import Xohanoc from "../../assets/Rectangle 22.png";
import Mijancq from "../../assets/Rectangle 23.png";
import Paharnner from "../../assets/Rectangle 24.png";
import Paharnner2 from "../../assets/Rectangle 25.png";
import Kuxnya2 from "../../assets/Rectangle 26.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Card = () => {
  return (
    <>
      <div className="box">
        <p className="text">WooDoo</p>
      </div>
      <div className="box1">
        <p className="text1"> Design Studio</p>
      </div>
      <div className="box2">
        <pre>
          <p className="text2">
            Here you can order any type of
            <br />
            furniture making your space beautiful,
            <br />
            simple but significant.
          </p>
        </pre>
      </div>
      <div className="box3">
        <button className="button">EXPLORE</button>
      </div>
      <div className="div">
        <p className="txt">Materials that we use</p>
      </div>
      <div className="images">
        <img src={Wood} alt="wood" className="img1" />
        <img src={Woods} alt="woods" className="img2" />
        <img src={Gorciqner} alt="woo" className="img3" />
      </div>
      <div className="div2">
        <button className="btn">DESCOVER</button>
      </div>
      <div className="div3">
        <p className="txt2">Best offer of day</p>
      </div>
      <div className="black-bg"></div>
      <div>
        <img src={Xohanoc} alt="xohanoc" className="xohanoc" />
      </div>
      <div className="black-bg2"></div>
      <div className="div4">
        <p className="txt3"> Recomended for you</p>
      </div>
      <div className="all imgs">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img className="img1" src={Mijancq} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img2" src={Paharnner} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img3" src={Paharnner2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img4" src={Kuxnya2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img4" src={Mijancq} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img4" src={Paharnner} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img4" src={Paharnner2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img4" src={Kuxnya2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Card;
