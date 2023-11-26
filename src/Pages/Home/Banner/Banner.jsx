import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../../../assets/images/banner/carousel-1-Only-Image.png";
import img2 from "../../../assets/images/banner/carousel-2-Only-Image.png";
import img3 from "../../../assets/images/banner/carousel-3-Only-Image.png";
import img4 from "../../../assets/images/banner/carousel-4-Only-Image.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <div className="hero min-h-screen bg-[#2D88FF] text-start px-10">
          <div className="flex items-center justify-between flex-col lg:flex-row-reverse">
            <div>
              <img src={img1} className="max-w-xl mt-20" />
            </div>
            <div className="md:w-3/5">
              <h3 className="text-2xl uppercase text-white font-bold">
                Mastering Shadows
              </h3>
              <h1 className="text-5xl font-bold text-[#FFD700] ">
                Expert Drop Shadow <span className="text-white">&</span>{" "}
                Backdrop Removal Services
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
              <button className="btn bg-[#FFD700] px-10 rounded-xl text-xl text-[#2D88FF] mb-16">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd Slide */}
      <div>
        <div className="hero min-h-screen bg-[#330066] text-start px-10">
          <div className="flex items-center justify-between flex-col lg:flex-row-reverse">
            <div>
              <img src={img2} className="max-w-2xl" />
            </div>
            <div className="md:w-3/5 mt-10">
              <h3 className="text-2xl uppercase text-white font-bold">
                Precision in Pixels
              </h3>
              <h1 className="text-5xl font-bold text-[#FFD700] ">
                Professional <br /> Clipping Path Services
              </h1>
              <p className="py-6 md:pr-36 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. <br /> In deleniti
                eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn bg-[#FFD700] px-10 rounded-xl text-xl text-[#330066]">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 3 */}
      <div>
        <div className="hero min-h-screen bg-[#2D88FF] text-start px-10">
          <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
            <img src={img3} className="max-w-2xl " />
            <div className="md:w-3/5 mt-10">
              <h3 className="text-2xl uppercase text-white font-bold">
                ChromaChic Studio
              </h3>
              <h1 className="text-5xl font-bold text-[#FFD700] ">
                Transforming Colors, <br /> Defining Paths
              </h1>
              <p className="py-6 text-white md:pr-36">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. <br /> In deleniti
                eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn bg-[#FFD700] px-10 rounded-xl text-xl text-[#2D88FF]">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 4 */}
      <div>
        <div className="hero min-h-screen bg-[#330066] text-start px-10">
          <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
            <img src={img4} className="max-w-2xl mt-20 " />
            <div className="md:w-3/5 mt-10">
              <h3 className="text-2xl uppercase text-white font-bold">
                Invisible Artistry
              </h3>
              <h1 className="text-5xl font-bold text-[#FFD700] ">
                Seamless Image Masking <br /> and Ghost Mannequin Edits
              </h1>
              <p className="py-6 text-white md:pr-36">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. 
              </p>
              <button className="btn bg-[#FFD700] px-10 rounded-xl text-xl text-[#330066]">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
