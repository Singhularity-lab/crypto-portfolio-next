import cryptoIcon from '../../public/static/images/crypto-icon-lg.png';
import secureIcon from '../../public/static/images/secure-icon-lg.png';
import transIcon from '../../public/static/images/trans-icon-lg.png';
import arrowIcon from '../../public/static/images/arrow.png';

const Securesection = () => {
  return (
    <div className="mt-10  px-6 sm:px-10">
      <div>
        <h2 className="text-white text-center text-[1rem] sm:text-[3rem] font-normal sm:font-medium">Secure & Private</h2>
        <h4 className="text-[#A5A3A8] text-center text-[0.8rem] sm:text-[1.5rem] font-normal">24/7 Dedicated Support Team</h4>
      </div>
      <div className="flex flex-wrap justify-around mt-10 gap-3">
        <div className="min-w-[20.5rem] w-[25.12rem] min-h-[20.75rem] rounded card-bg mt-10 px-10 pb-10">
          <div className="flex justify-center -translate-y-10 ">
            <img src={cryptoIcon.src} alt="crypto-icon" className="card-icon-shadow" />
          </div>
          <h4 className="text-white font-extrabold text-[2rem] text-center">Invest in crypto</h4>
          <h4 className="text-[#A5A3A8] text-center mt-4 font-normal leading-6">Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform.</h4>
          <div className="flex justify-center mt-6">
            <button className="text-[#6200EE] font-semibold flex">
              Get Started <img src={arrowIcon.src}></img>
            </button>
          </div>
        </div>
        <div className="min-w-[20.5rem] w-[25.12rem] min-h-[20.75rem] rounded card-bg mt-10 px-10 pb-10">
          <div className="flex justify-center -translate-y-10">
            <img src={secureIcon.src} alt="crypto-icon" />
          </div>
          <h4 className="text-white font-extrabold text-[2rem] text-center">Fast Transaction</h4>
          <h4 className="text-[#A5A3A8] text-center mt-4 font-normal leading-6">
            Invest in cryptocurrency with our secure and easy-to-use online platform. With 24/7 access to full service customer support, you can trade with confidence.
          </h4>
          <div className="flex justify-center mt-6">
            <button className="text-[#6200EE] font-semibold flex">
              Get Started <img src={arrowIcon.src}></img>
            </button>
          </div>
        </div>
        <div className="min-w-[20.5rem] w-[25.12rem] min-h-[20.75rem] rounded card-bg mt-10 px-10 pb-10">
          <div className="flex justify-center -translate-y-10">
            <img src={transIcon.src} alt="crypto-icon" />
          </div>
          <h4 className="text-white font-extrabold text-[2rem] text-center">Secure</h4>
          <h4 className="text-[#A5A3A8] text-center mt-4 font-normal leading-6">
            Gain access to a variety of digital assets with just a few clicks. Our intuitive platform makes it easy to buy, sell, and store your cryptocurrency.
          </h4>
          <div className="flex justify-center mt-6">
            <button className="text-[#6200EE] font-semibold flex">
              Get Started <img src={arrowIcon.src}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securesection;
