

const ServiceItems = ({item}) => {
    const {service_name, description, image, price}= item
    return (
        <div className="flex justify-between space-x-4">
            <img style={{borderRadius: '0 100px 100px 50px', backgroundColor:'#F8F6FA'}} className="w-[210px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{service_name}-------------</h3>
                <p className="">{description}</p>
            </div>
            <p className="text-[#FFD700]">${price}</p>

            
        </div>
           
    );
};

export default ServiceItems;