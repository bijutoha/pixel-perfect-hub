

const ServiceItems = ({item}) => {
    const {service_name, description, image, price}= item
    return (
        <div className="flex justify-between space-x-4">
            <img className="w-[220px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{service_name}-------------</h3>
                <p className="">{description}</p>
            </div>
            <p className="text-[#FFD700]">${price}</p>
            
        </div>
    );
};

export default ServiceItems;