import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slide1 from '../../../assets/images/banner/category-1.png';
import slide2 from '../../../assets/images/banner/category-2.png';
import slide3 from '../../../assets/images/banner/category-3.png';
import slide4 from '../../../assets/images/banner/category-4.png';
import slide5 from '../../../assets/images/banner/category-5.png';

const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
       
      </Swiper>
    );
};

export default Category;