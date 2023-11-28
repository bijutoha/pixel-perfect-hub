import { Parallax } from 'react-parallax';

const Cover = ({ img }) => {
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
          <h1 className="mb-5 text-5xl font-bold">At Pixel Perfect Hub, consider us your virtual photo magic makers!</h1>
          <p className="mb-5">
          Simply upload your images, and voila! In just a few hours, they're returned to you—pixel-perfect and ready to dazzle. Your desired size, your preferred format—no need to break a sweat. We've got your photo editing worries covered!
          </p>
          <button className="btn btn-primary">Get Quote</button>
        </div>
      </div>
    </div>
</Parallax>



    
  );
};

export default Cover;
