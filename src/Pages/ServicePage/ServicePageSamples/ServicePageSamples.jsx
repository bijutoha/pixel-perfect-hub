import ShowServicePageSamples from "../ShowServicePageSamples/ShowServicePageSamples";

const ServicePageSamples = ({samples}) => {
  

  return (
    <div className="px-40">
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
