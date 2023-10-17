'use client';
import "swiper/swiper-bundle.min.css";
import React, { useRef,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
;import CarouselCard from '../CarouselCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Product } from 'lib/client/storage';

interface ICarousel {
  prod: Product[];
}
const Carousel: React.FC<ICarousel> = ({ prod }) => {
  const swiperRef = useRef<typeof Swiper | null>(null);

  const updateSwiperRef = (swiper: typeof Swiper | null) => {
    swiperRef.current = swiper;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [prod]);

  return (
    <div className="overflow-hidden w-full pt-4 pb-12 px-12 rounded-3xl relative">
      <Swiper
        className="flex flex-col p-2"
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => updateSwiperRef(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {prod.map((item, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <CarouselCard prod={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <ChevronLeftIcon
          onClick={() => swiperRef.current?.slidePrev()}
          className="prev absolute left-0 bottom-28 w-6 cursor-pointer"
        />
        <ChevronRightIcon
          onClick={() => swiperRef.current?.slideNext()}
          className="next absolute right-0 bottom-28 w-6 cursor-pointer"
        />
        </div>
    </div>
  );
};

export default Carousel;