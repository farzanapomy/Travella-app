import img from '../../../assets/hotel2.jpg';
const SearchHotels = () => {
  return (
    <div className="border border-[#D3D3D3] p-2 rounded-lg shadow-xl	">
      <div className="flex flex-col justify-start items-center gap-5 ">
        <div className="">
          <img
            src={img}
            alt=""
            className="rounded-md h-45 object-cover w-full"
          />
        </div>
        <div className=" flex justify-start items-start flex-grow flex-col pl-1">
          <div className=" flex justify-start items-center">
            <p className="text-title-xsm font-semibold mb-2 text-[#3A5357]">
              Dubai Tower Apartment
            </p>
            <span className="text-2xl text-[#3A5357] font-bold">$123.00</span>
          </div>
          <div className="flex flex-col items-end justify-end flex-grow">
            <span>Includes taxes and fees</span>
          </div>
          <span className="text-sm">500m from center</span>
          <span className="  px-1 rounded text-sm mt-1">Free airport taxi</span>
          <span className="font-semibold text-sm my-1">
            Studio Apartment with Air Condition
          </span>
          <span className="text-sm">Entire studio + 1 Bathroom </span>
          <span className="text-[#3A5357] font-semibold">
            Free Cancelation Service
          </span>
          {/* <span className="text-[#3A5357] text-sm">
            You can cancel later, but for now, book to secure a great price! 
          </span>
            */}
        </div>
        <button className=" p-1 rounded-md flex-1 bg-[#3A5357] w-full text-white mx-auto text-center">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default SearchHotels;
