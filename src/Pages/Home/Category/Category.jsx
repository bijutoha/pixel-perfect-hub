import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../../assets/images/banner/category-1.png";
import slide2 from "../../../assets/images/banner/category-2.png";
import slide3 from "../../../assets/images/banner/category-3.png";
import slide4 from "../../../assets/images/banner/category-4.png";
import slide5 from "../../../assets/images/banner/category-5.png";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"image editing services"}
        heading={"Our Sample Works"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mx-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="text-center uppercase -mt-20 text-white">
            <h3 className="text-xl font-bold ">
              Remove Background <br /> & Drop Shadow
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
