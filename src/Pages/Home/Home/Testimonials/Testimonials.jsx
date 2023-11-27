import quote from '../../../../assets/images/icons/quote-left 1.png';
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20 px-40">
      <SectionTitle
        subHeading={"what our clients say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>

            <div className="m-24 flex flex-col items-center space-y-9">
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <img className='w-[70px]' src={quote} alt="" />
              <p>{review.details}</p>
              <h3 className="text-2xl text-[#FFD700]">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
