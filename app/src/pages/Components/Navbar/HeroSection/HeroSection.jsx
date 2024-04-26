import hero from '../../../../assets/hero.svg';
const HeroSection = () => {
  return (
    <div className="flex justify-between items-center  max-w-[1240px] mx-auto  h-screen  ">
      <div className="w-full ">
        <h1 className="text-7xl font-Inter text-white">
          Make your travel wishlist, we’ll do the rest
        </h1>
        <p className="text-xl text-white">Special offers to suit your plan</p>
      </div>
      <div className="w-full flex justify-between items-center  ml-auto">
        <div className="bg-[#979797]  bg-opacity-55 p-4 h-[100%] w-[50%] rounded-lg rounded-e  delay-0 animate-wiggle -skew-y-12">
          <p className="text-white cursor-pointer">Up Next</p>
          <p className="font-Inter text-white opacity-100 text-2xl my-10  font-semibold">
            Arial view of Rock Cliffs
          </p>
          <p className="size-10 cursor-pointer">→</p>
        </div>
        <div className="w-full ">
          <img
            src={hero}
            alt=""
            className="h-[70%] w-[50%] object-fill rounded-lg rounded-s  skew-y-12"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
