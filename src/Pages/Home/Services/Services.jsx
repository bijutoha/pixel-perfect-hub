import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useServices from "../../../hooks/useServices";
import ServiceItems from "./ServiceItems/ServiceItems";



const Services = () => {

    const [services] = useServices();
    const popularServices = services.filter(service => service.category === 'popular')
    // const [services, setServices]=useState([])
    // useEffect(()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const populerServices = data.filter(service => service.category === 'popular')
    //         setServices(populerServices)})
    // }, [])
    return (
        <section className="px-40">
            <SectionTitle
             subHeading='check them outs'
             heading="Our Services"
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    popularServices.map(item => <ServiceItems
                    key={item._id}
                    item={item}
                    ></ServiceItems>)
                }
            </div>

            <div className="flex justify-center"><button className="btn hover:bg-[#FFD700] hover:text-[#330066] btn-outline border-0 border-b-4 border-[#FFD700] text-[#330066]">View All Services</button></div>
            
        </section>
    );
};

export default Services;