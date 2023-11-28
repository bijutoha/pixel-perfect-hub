import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
  return (
    
    <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={img}
    bgImageAlt="photo editing services"
    strength={0}
>
<div
      className="hero h-[80vh]"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
           {description}
          </p>
          <button className="btn btn-primary">Get Quote</button>
        </div>
      </div>
    </div>
</Parallax>



    
  );
};

export default Cover;
