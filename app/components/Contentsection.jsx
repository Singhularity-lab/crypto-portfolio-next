import feature1ImgLg from '../../public/static/images/feature-1-lg.png';
import feature1ImgMd from '../../public/static/images/feature-1-md.png';
import feature2ImgLg from '../../public/static/images/feature-2-lg.png';
import feature2ImgMd from '../../public/static/images/feature-2-md.png';
import feature3ImgLg from '../../public/static/images/feature-3-lg.png';
import feature3ImgMd from '../../public/static/images/feature-3-md.png';

const Contentsection = () => {
  return (
    <div className="mt-10  px-6 sm:px-10">
      <div className="flex mt-8">
        <div className="flex-col sm:py-auto text-white items-center sm:w-1/2 w-screen sm:my-auto">
          <h2 className="font-medium sm:text-[3rem] text-[1.37rem] sm:leading-[3.5rem] leading-[1.61rem] text-center sm:text-left">
            Trade with confidence with <span className="text-gradient-1">Our platform</span> and easy to use.
          </h2>
          <h6 className="text-[#A5A3A8] text-[0.62rem] sm:text-[1.5rem] text-center sm:text-left mt-4">
            Stay up-to-date with the latest news and trends in the crypto space. Follow our market insights to make informed decisions.
          </h6>
          <div className="mx-auto flex md:w-[9.56rem] w-[8.8rem] md:h-[3.12rem] h-[2.5rem] mt-6">
            <div className="w-full rounded-md bg-gradient-to-r from-[#FF888F]  to-[#3C6DD9] p-1">
              <div className="flex h-full w-full items-center justify-center bg-[#161730]">
                <span className="md:text-[1.37rem]  text-[1rem]  font-medium text-white">Explore Now</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-end sm:flex hidden w-0 sm:w-1/2 -z-50">
          <img src={feature1ImgLg.src} className="md:block hidden object-contain"></img>
          <img src={feature1ImgMd.src} className="md:hidden sm:block block object-contain"></img>
        </div>
      </div>
      <div className="flex mt-8">
        <div className=" justify-end sm:flex hidden w-0 sm:w-1/2 -z-50">
          <img src={feature2ImgLg.src} className="md:block hidden object-contain"></img>
          <img src={feature2ImgMd.src} className="md:hidden sm:block block object-contain"></img>
        </div>
        <div className="flex-col sm:py-auto text-white items-center sm:w-1/2 w-screen sm:my-auto">
          <h2 className="font-medium sm:text-[3rem] text-[1.37rem] sm:leading-[3.5rem] leading-[1.61rem] text-center sm:text-left">
            <span className="text-gradient-2">24/7</span> access to customer support
          </h2>
          <h6 className="text-[#A5A3A8] text-[0.62rem] sm:text-[1.5rem] text-center sm:text-left mt-4">
            Invest in digital assets with peace of mind. Our secure platform offers industry-leading security to protect your funds.
          </h6>
          <div className="mx-auto flex md:w-[9.56rem] w-[8.8rem] md:h-[3.12rem] h-[2.5rem] mt-6">
            <div className="w-full rounded-md bg-gradient-to-r from-[#FF888F]  to-[#3C6DD9] p-1">
              <div className="flex h-full w-full items-center justify-center bg-[#161730]">
                <span className="md:text-[1.37rem]  text-[1rem]  font-medium text-white">Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8">
        <div className="flex-col sm:py-auto text-white items-center sm:w-1/2 w-screen sm:my-auto">
          <h2 className="font-medium sm:text-[3rem] text-[1.37rem] sm:leading-[3.5rem] leading-[1.61rem] text-center sm:text-left">
            Our platform offers levels of <span className="text-gradient-3">security</span> to protect your funds.
          </h2>
          <h6 className="text-[#A5A3A8] text-[0.62rem] sm:text-[1.5rem] text-center sm:text-left mt-4">
            Start investing with confidence. Our team is here to provide you with the guidance and support you need to make the most of your investments.
          </h6>
          <div className="mx-auto flex md:w-[9.56rem] w-[8.8rem] md:h-[3.12rem] h-[2.5rem] mt-6">
            <div className="w-full rounded-md bg-gradient-to-r from-[#FF888F]  to-[#3C6DD9] p-1">
              <div className="flex h-full w-full items-center justify-center bg-[#161730]">
                <span className="md:text-[1.37rem]  text-[1rem]  font-medium text-white">Get Started</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-end sm:flex hidden w-0 sm:w-1/2 -z-50">
          <img src={feature3ImgLg.src} className="md:block hidden object-contain"></img>
          <img src={feature3ImgMd.src} className="md:hidden sm:block block object-contain"></img>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <h2 className="font-medium sm:text-[3rem] text-[1.37rem] sm:leading-[3.5rem] leading-[1.61rem] text-center text-white">Use Money in your wallet</h2>
        <h6 className="text-[#A5A3A8] text-[0.62rem] sm:text-[1.5rem] text-center  mt-4">
          Cryptocurrency is a digital form of currency that utilizes cryptography to secure transactions, control the creation of new units, and verify the transfer of assets.
        </h6>
      </div>
    </div>
  );
};

export default Contentsection;
