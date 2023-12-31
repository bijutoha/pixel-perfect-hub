import featured2 from "../../../assets/images/banner/featured-2.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-bg bg-fixed text-white py-10 my-20">
        
      <SectionTitle
        
        subHeading="read story"
        featuredText="Featured Story"
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-8 px-16 space-x-10 ">
        <div>
          <img src={featured2} alt="" className="w-[500px] rounded-2xl" />
        </div>
        <div>
          <h3 className="uppercase text-xl">product photo delivery times</h3>
          <p>
            Transforming product photo delivery times from one week to just one
            day, courtesy of Pixel Perfect Hub.
          </p>

          <button className="btn hover:bg-[#FFD700] hover:text-[#330066] btn-outline border-0 border-b-4 border-[#FFD700] text-white mt-5">View All Services</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
