

const ShowServicePageSamples = ({sample}) => {
    const {image} = sample;
    return (
        <div className="flex justify-between place-self-center">
            <img className="w-[350px]" src={image} alt="" />            
        </div>
    );
};

export default ShowServicePageSamples;