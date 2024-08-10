import img from '../../../assets/hotel2.jpg';
const SearchHotels = () => {
  return (
    <div className="border border-[#D3D3D3] p-2 shadow-sm cursor-pointer ">
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
            <p className="text-title-md font-semibold mb-2 text-[#3A5357]">
              Tower Street Apartment
            </p>
            <div className="flex flex-col items-end justify-end flex-grow">
              <span className="text-sm text-[#3A5357]">Excellent</span>
              <button className="text-white bg-[#3A5357] px-1 rounded">
                4.2
              </button>
            </div>
          </div>
          <span className="text-sm">500m from center</span>
          <button className="text-white bg-[#3a5357c4] p-1 rounded text-sm mt-2">
            Free airport text
          </button>
          <span className="font-semibold text-sm my-2">
            Studio Apartment with Air Condition
          </span>
          <span className="">Entire studio + 1 Bathroom </span>
          <span className="text-[#3A5357] font-semibold">Free Cancelation</span>
          <span className="text-[#3A5357] text-sm">
            You can cancel later also so please booked now to get great price
            now!!
          </span>
        </div>
        <div className="flex justify-between items-center gap-5"></div>
      </div>
    </div>
  );
};

export default SearchHotels;
