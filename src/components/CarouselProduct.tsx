import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function CarouselProduct() {
  return (
    <div className="bg-white m-4 p-4">
      <div className="text-3xl font-semibold mb-4">Best Sellers</div>
      <Swiper slidesPerView={7} spaceBetween={10} navigation={true} modules={[Navigation]}>
        {Array.from({ length: 9 }, (_, index) => (
          <SwiperSlide key={index}>
            <img src={`../images/product_${index}_small.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
