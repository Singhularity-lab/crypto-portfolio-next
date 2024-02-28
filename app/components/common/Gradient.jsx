import mobGradient from '../../../public/static/images/mob-gradient.png';
import deskGradient from '../../../public/static/images/desk-gradient.png';

const Gradient = () => {
  return (
    <div>
      <img src={deskGradient.src} alt="background gradient" className="absolute sm:block hidden w-[600px] top-0 left-0" />
      <img src={mobGradient.src} alt="background gradient mobile" className="absolute block sm:hidden w-[100vw] h-[500px] top-0 left-0" />
    </div>
  );
};

export default Gradient;
