import avatarOne from '../../public/static/images/hero-mem-1.png';
import avatarTwo from '../../public/static/images/hero-mem-2.png';
import avatarThree from '../../public/static/images/hero-mem-3.png';
import avatarFour from '../../public/static/images/hero-mem-4.png';
import heroImage from '../../public/static/images/hero-img.png';
import heroImageSm from '../../public/static/images/tablet-hero.png';

const Herosection = () => {
  return (
    <div className="flex  px-6 sm:px-10 pt-4 mt-8 sm:mt-2">
      <div className="flex-col sm:py-auto text-white items-center sm:w-1/2 w-screen sm:my-auto">
        <div className="text-6xl font-semibold">
          <h1 className="md:text-[4rem] sm:text-[2.6rem] text-[1.37rem] sm:text-left text-center leading-6 sm:leading-none">Explore the largest </h1>
          <h1 className="md:text-[4rem] sm:text-[2.6rem] text-[1.37rem]  sm:text-left text-center leading-6 sm:leading-none">NFT Marketplaces</h1>
        </div>
        <div className="md:text-[1.5rem] text-[0.62rem] text-[#A5A3A8] sm:text-left text-center  mt-4">Buy, Sell & Trade Cryptocurrency Easily and Securely</div>
        <div className="flex mt-6">
          <button className=" bg-[#553f9a] md:w-[11.8rem] w-[8.8rem] md:h-[3.12rem] h-[2.5rem] md:text-[1.37rem] text-[1rem] font-medium">Connect Wallet</button>
          <div className="mx-auto flex md:w-[9.56rem] w-[8.8rem] md:h-[3.12rem] h-[2.5rem]  justify-center">
            <div className="w-full rounded-md bg-gradient-to-r from-[#FF888F]  to-[#3C6DD9] p-1">
              <div className="flex h-full w-full items-center justify-center bg-[#161730]">
                <span className="md:text-[1.37rem]  text-[1rem]  font-medium text-white">Learn More</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between mt-10">
          <button className=" text-[0.87rem]  md:text-[1.4rem] font-normal">Our Members</button>
          <div className="flex">
            <img src={avatarOne.src} className="w-[1.68rem] md:w-[3.31rem] h-[1.68rem] md:h-[3.31rem]"></img>
            <img src={avatarTwo.src} className="w-[1.68rem] md:w-[3.31rem] h-[1.68rem] md:h-[3.31rem] -translate-x-2"></img>
            <img src={avatarThree.src} className="w-[1.68rem] md:w-[3.31rem] h-[1.68rem] md:h-[3.31rem] -translate-x-4"></img>
            <img src={avatarFour.src} className="w-[1.68rem] md:w-[3.31rem] h-[1.68rem] md:h-[3.31rem] -translate-x-6"></img>
          </div>
        </div>
      </div>
      <div className=" justify-end sm:flex hidden w-0 sm:w-1/2 -z-50">
        <img src={heroImage.src} className="hidden md:block"></img>
        <img src={heroImageSm.src} className="block md:hidden"></img>
      </div>
    </div>
  );
};
export default Herosection;
