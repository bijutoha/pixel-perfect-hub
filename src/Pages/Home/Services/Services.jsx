import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceItems from "../../Shared/ServiceItems/ServiceItems";


const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            const populerServices = data.filter(service => service.category === 'popular')
            setServices(populerServices)})
    }, [])
    return (
        <section className="px-40">
            <SectionTitle
             subHeading='check them outs'
             heading="Our Services"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    services.map(item => <ServiceItems
                    key={item._id}
                    item={item}
                    ></ServiceItems>)
                }
            </div>
            
        </section>
    );
};

export default Services;