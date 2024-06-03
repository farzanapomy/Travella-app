import hero from '../../../../assets/hero.svg';
const HeroSection = () => {
  return (
    <div className="  ">
      <div className="flex justify-between items-center  h-fit mt-6 relative">
        <div className="w-4/6 ">
          <h1 className="text-3xl md:text-7xl font-Inter text-white">
            Make your travel wishlist, we’ll do the rest
          </h1>
          <p className="text-xl text-white">
            Get rewarded for your travels - unlock instant saving of 10& or more
            with TrɅ<span className="text-white">vel</span>lɅ Go
          </p>
        </div>
        <div className="   w-4/6 hidden  lg:flex md:justify-end md:items-center   mr-auto">
          <div className="bg-[#979797]  bg-opacity-55 p-4 h-[100%]  w-[40%] rounded-lg rounded-e  delay-0  ">
            <p className="text-white cursor-pointer">Up Next</p>
            <p className="font-Inter text-white opacity-100 text-2xl my-10  font-semibold">
              Arial view of Rock Cliffs
            </p>
            <p className="size-10 cursor-pointer">→</p>
          </div>
          <div className="w-fit items-end">
            <img
              src={hero}
              alt=""
              className="h-[70%] w-full object-fill rounded-lg rounded-s   "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
