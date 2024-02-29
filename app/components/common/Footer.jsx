import cryptoLogo from '../../../public/static/images/logo-crypto.png';
import telIcon from '../../../public/static/images/tele-icon.png';
import mailIcon from '../../../public/static/images/mail-icon.png';

const Footer = () => {
  return (
    <div className=" footer-gradient-bg px-20 py-14">
      <div className="flex">
        <div>
          <img src={cryptoLogo.src} alt="crypto logo footr" className="w-[4.62rem]" />
          <h6 className="text-[#8C8C8C] font-normal mt-6">
            Cryptocurrency has revolutionized the world of finance and digital transactions, providing individuals with a decentralized and secure way to store, transfer, and manage their wealth
          </h6>
          <div className="sm:flex flex-col mt-6">
            <div className="flex px-4">
              <img src={telIcon.src} className="w-[3rem] h-[3rem]"></img>
              <div className="flex-col px-2">
                <p className="text-[0.75rem] text-[#8C8C8C] font-normal">Have a question?</p>
                <p className="text-white font-medium">123-456-789</p>
              </div>
            </div>
            <div className="flex px-4 sm:mt-0 mt-4">
              <img src={mailIcon.src} className="w-[3rem] h-[3rem]"></img>
              <div className="flex-col px-2">
                <p className="text-[0.75rem] text-[#8C8C8C] font-normal">Contact Us at</p>
                <p className="text-white font-medium text-wrap">testail@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex text-[#8C8C8C] justify-between text-[0.85rem] mt-16">
        <ul className="sm:flex flex-col gap-4 text-sm sm:text-base sm:gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">NFT Markets</li>
          <li className="cursor-pointer">Shop</li>
          <li className="sm:block hidden cursor-pointer">About Us</li>
        </ul>
        <ul className="flex gap-3 text-sm sm:text-base sm:gap-10 justify-center">
          <li className="cursor-pointer ">@2024, Singhularity Labs</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
