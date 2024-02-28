import mainLogo from '../../../public/static/images/logo-crypto.png';

import hamIcon from '../../../public/static/images/ham-icon.png';

const Header = () => {
  return (
    <div className="top-0 flex text-white py-auto justify-between relative items-center px-6 sm:px-10 pt-4">
      <div className="z-50 cursor-pointer">
        <img src={mainLogo.src} className="sm:w-[4.6rem] w-[2.12rem]" alt="crpto logo" />
      </div>
      <div className="z-50">
        <ul className="flex gap-5 text-sm sm:text-base sm:gap-10">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">NFT Markets</li>
          <li className="cursor-pointer">Shop</li>
          <li className="sm:block hidden cursor-pointer">About Us</li>
        </ul>
      </div>
      <div className="z-50 sm:block hidden cursor-pointer">
        <button>Explore Now</button>
      </div>
      <img src={hamIcon.src} alt="background gradient mobile cursor-pointer" className="block sm:hidden h-[0.75rem]" />
    </div>
  );
};

export default Header;
