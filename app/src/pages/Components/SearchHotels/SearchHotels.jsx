import img from '../../../assets/hotel2.jpg';
const SearchHotels = () => {
  return (
    <div className="border border-[#D3D3D3] p-2 shadow-sm">
      <div className="flex justify-start items-start gap-5">
        <div>
          <img
            src={img}
            alt=""
            className="rounded-md h-40 object-cover w-full"
          />
        </div>
        <div className=" flex justify-start items-start flex-grow flex-col   pl-0">
          <p className="text-title-lg text-[#3A5357]">Tower Street Apartment</p>
          <span>500m from center</span>
          <button className="text-white bg-[#3A5357] p-1 rounded">
            Free airport text
          </button>
          <span>Studio Apartment with Air Condition</span>
          <span>Entire studio + 1 Bathroom </span>
          <span>Free Cancelation</span>
          <span>
            You can cancel later also so please booked now to get great price
            now!!
          </span>
        </div>
      </div>
      <div>
        <span className="text-title-sm text-[#3A5357]">Excellent</span>
        <button className="text-white bg-[#3A5357] p-1 rounded">4.2</button>
      </div>
    </div>
  );
};

export default SearchHotels;
