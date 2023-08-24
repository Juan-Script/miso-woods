// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlidesInt } from "../../../data/mock";

export const Slider = ({ slides }: { slides: SlidesInt[] }) => {
  return (
    <AwesomeSlider className="slider">
      {slides[0].image.map((slide: any) => (
        <div key={slide.image}>
          <div className="product-img">
            <img src={slide} alt={`img/${slide?.name}`} />
          </div>
        </div>
      ))}
    </AwesomeSlider>
    // <Swiper
    //   spaceBetween={1}
    //   centeredSlides={true}
    //   slidesPerView={1}
    //   autoplay={{
    //     delay: 10000,
    //     disableOnInteraction: false,
    //   }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   navigation={true}
    //   modules={[Autoplay, Pagination, Navigation]}
    //   className="mySwiper"
    // >
    //   {slides[0].image.map((slide: any) => (
    //     <SwiperSlide key={slide.image}>
    //       <div className="product-img">
    //         <img src={slide} alt={`img/${slide?.name}`} />
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
