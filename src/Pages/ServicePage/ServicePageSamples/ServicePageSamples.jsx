import Cover from "../../Shared/Cover/Cover";
import ShowServicePageSamples from "../ShowServicePageSamples/ShowServicePageSamples";

const ServicePageSamples = ({samples, title, description, img}) => {
  

  return (
    <div className="px-40">
        {title && <Cover img={img} title={title} description={description} ></Cover>}
      <div className="grid md:grid-cols-2 gap-4 my-20">
        
            {samples.map((sample) => (
              <ShowServicePageSamples
                key={sample._id}
                sample={sample}
              ></ShowServicePageSamples>
            ))}
       
      </div>
    </div>
  );
};

export default ServicePageSamples;
