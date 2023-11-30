import { Helmet } from "react-helmet-async";
import imageMaskingCover from "../../assets/images/banner/Image-masking-service-banner.jpg";
import backgroundRemovingCover from "../../assets/images/banner/featured-2.jpg";
import banner from "../../assets/images/banner/services-page-banner.png";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useSamples from "../../hooks/useSamples";
import useServices from "../../hooks/useServices";
import Cover from "../Shared/Cover/Cover";
import ServicePageSamples from "./ServicePageSamples/ServicePageSamples";

const ServicePage = () => {
  const [services] = useServices();
  const clippingPath = services.filter(
    (service) => service.type === "clipping path"
  );
  const backgroundRemoving = services.filter(
    (service) => service.type === "background removing"
  );
  const imageMasking = services.filter(
    (service) => service.type === "image masking"
  );
  const shadow = services.filter((service) => service.type === "shadow");
  const mannequin = services.filter((service) => service.type === "mannequin");
  const colorChange = services.filter(
    (service) => service.type === "color change"
  );
  const retouching = services.filter(
    (service) => service.type === "retouching"
  );
  const vector = services.filter((service) => service.type === "vector");
  const multiClipping = services.filter(
    (service) => service.type === "multi clipping"
  );

  const [samples] = useSamples();
  const serviceOne = samples.filter(
    (sample) => sample.service_type === "service_one"
  );
  const serviceTwo = samples.filter(
    (sample) => sample.service_type === "service_two"
  );

  const serviceThree = samples.filter(sample => sample.service_type === 'service_three')
  return (
    <div>
      <Helmet>
        <title>Pixel Perfect Hub | Photo Editing Services</title>
      </Helmet>
      <Cover
        img={banner}
        title={
          "At Pixel Perfect Hub, consider us your virtual photo magic makers!"
        }
        description="Simply upload your images, and voila! In just a few hours, they're returned to you—pixel-perfect and ready to dazzle. Your desired size, your preferred format—no need to break a sweat. We've got your photo editing worries covered!"
      ></Cover>
      <SectionTitle
        subHeading={"hand-drawn clipping paths"}
        heading={"Clipping path services"}
      ></SectionTitle>

      {clippingPath.map((path) => (
        <div className="flex justify-center" key={path._id}>
          <img className="w-2/12" src={path.image} alt="" />
        </div>
      ))}

      <ServicePageSamples samples={serviceOne}></ServicePageSamples>

      {/* Background removal services */}

      <Cover
        img={backgroundRemovingCover}
        title="Background removal services"
        description={
          "Outsource your background removal and get those tedious, nitty-gritty edits off your plate."
        }
      ></Cover>

      {backgroundRemoving.map((path) => (
        <div className="flex justify-center" key={path._id}>
          <img className="w-2/12" src={path.image} alt="" />
        </div>
      ))}
      <ServicePageSamples samples={serviceTwo}></ServicePageSamples>

      {/* Image Masking services */}

      <Cover
        img={imageMaskingCover}
        title="Image masking services"
        description={
          "Outsource your background removal and get those tedious, nitty-gritty edits off your plate."
        }
      ></Cover>

      {imageMasking.map((mask) => (
        <div className="flex justify-center" key={mask._id}>
          <img className="w-2/12" src={mask.image} alt="" />
        </div>
      ))}
      <ServicePageSamples samples={serviceThree}></ServicePageSamples>
    </div>
  );
};

export default ServicePage;
