import { Helmet } from 'react-helmet-async';
import banner from '../../assets/images/banner/services-page-banner.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useSamples from '../../hooks/useSamples';
import useServices from '../../hooks/useServices';
import Cover from '../Shared/Cover/Cover';
import ServicePageSamples from './ServicePageSamples/ServicePageSamples';

const ServicePage = () => {
    const [services] = useServices();
    const clippingPath = services.filter(service => service.type === 'clipping path');
    const backgroundRemoving = services.filter(service => service.type === 'background removing');
    const imageMasking = services.filter(service => service.type === 'image masking');
    const shadow = services.filter(service => service.type === 'shadow');
    const mannequin = services.filter(service => service.type === 'mannequin');
    const colorChange = services.filter(service => service.type === 'color change');
    const retouching = services.filter(service => service.type === 'retouching');
    const vector = services.filter(service => service.type === 'vector');
    const multiClipping = services.filter(service => service.type === 'multi clipping');

    const [samples] = useSamples();
    const serviceOne = samples.filter(sample => sample.service_type === 'service_one')
    return (
        <div>

            <Helmet>
                <title>Pixel Perfect Hub | Photo Editing Services</title>
            </Helmet>
            <Cover img={banner}></Cover>
            <SectionTitle subHeading={'hand-drawn clipping paths'} heading={'Clipping path services'}></SectionTitle>

            {
                clippingPath.map(path => <div className='flex justify-center' key={path._id}>
                    <img className='w-2/12' src={path.image} alt="" />
                </div>)
            }

            <ServicePageSamples samples={serviceOne} ></ServicePageSamples>
            
        </div>
    );
};

export default ServicePage;