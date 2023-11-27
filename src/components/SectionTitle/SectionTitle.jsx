const SectionTitle = ({ heading, subHeading, featuredText }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-10">
      <p className="text-[#2D88FF] text-xl">---{subHeading}---</p>
     {
        heading ? <h3 className="text-3xl uppercase font-bold text-[#333333] border-y-2 py-4 mt-2">
        {heading}
      </h3> :  <h3 className="text-3xl uppercase font-bold text-[#fdfdfd] border-y-2 py-4 mt-2">
        {featuredText}
      </h3>
     }
      
    </div>
  );
};

export default SectionTitle;
