import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { myProjectContent } from "../../data/myProjectContent.js";
import { useRef, useState } from "react";
import Card from "./Card.jsx";
import NavigationButton from "../atoms/button-components/NavigationButton.jsx";
import "swiper/css";
import PaginationButton from "../atoms/button-components/PaginationButton.jsx";

const CardCarousel = () => {
  const swiperRef = useRef();
  const [slidesPerGroup, setSlidesPerGroup] = useState(0);
  const [totalBullets, setTotalBullets] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 38,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 38,
            },
          }}
          onBreakpoint={(swiper) => {
            swiper.update();
            setSlidesPerGroup(swiper.params.slidesPerGroup);

            const totalSlides = swiper.slides.length;
            setTotalBullets(
              Math.ceil(totalSlides / swiper.params.slidesPerGroup),
            );
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(
              Math.floor(swiper.realIndex / swiper.params.slidesPerGroup),
            );
          }}
        >
          {myProjectContent.map((myProject, index) => (
            <SwiperSlide key={index}>
              <Card myProject={myProject} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation */}
        <div className="absolute hidden top-1/2 -translate-y-1/2 z-5 md:flex justify-between md:-left-4 md:-right-4 lg:-left-6 lg:-right-6">
          <NavigationButton type="prev" swiperRef={swiperRef} />
          <NavigationButton type="next" swiperRef={swiperRef} />
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination-btns flex flex-row gap-4 md:gap-5 w-full justify-center mt-8 lg:mt-12">
        {Array.from({ length: totalBullets }).map((_, index) => (
          <PaginationButton
            key={index}
            index={index}
            slidesPerGroup={slidesPerGroup}
            swiperRef={swiperRef}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
