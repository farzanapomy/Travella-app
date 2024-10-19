import { useNavigate } from 'react-router-dom';
import apart from '../../../assets/apart.jpg';

const SearchHotels = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);

  return (
    <div className="border border-[#D3D3D3] p-2 rounded-lg shadow-xl">
      <div className="flex flex-col justify-start items-center gap-5">
        <div className="">
          <img
            src={item?.image || apart} // Use fallback image if item.image is missing
            alt="Hotel"
            className="rounded-md h-45 object-cover w-full"
          />
        </div>
        <div className="flex justify-start items-start flex-grow flex-col pl-1">
          <div className="flex justify-start items-center">
            <p className="text-title-sm font-semibold mb-2 text-[#3A5357]">
              {item?.name || 'Hotel Name'} {/* Use dynamic hotel name */}
            </p>
          </div>
          <span className="text-2xl font-bold">
            ${item?.cheapestPrice || '0.00'}
          </span>{' '}
          {/* Use dynamic price */}
          <div className="flex flex-col items-end justify-end flex-grow">
            <span>Includes taxes and fees</span>
          </div>
          <span className="text-sm">
            {item?.distance || 'Distance not available'} from center
          </span>
          <span className="rounded text-sm mt-1">Free airport taxi</span>
          <span className="font-semibold text-sm my-1">
            {item?.description || 'Studio Apartment with Air Condition'}
          </span>
          <span className="text-sm">Entire studio + 1 Bathroom</span>
          <span className="text-[#3A5357] font-semibold">
            Free Cancellation Service
          </span>
        </div>
        <button
          className="p-1 rounded-md flex-1 bg-[#3A5357] w-full text-white mx-auto text-center"
          onClick={() => navigate(`/hotels/${item?._id || 1}`)} // Use dynamic ID if available
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default SearchHotels;
