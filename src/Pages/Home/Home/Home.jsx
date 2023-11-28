import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Services from "../Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pixel Perfect Hub | Image Editing Services</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Services></Services>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
