import hotel1 from '../../../assets/hotel1.jpg';
import hotel2 from '../../../assets/hotel2.jpg';
import hotel3 from '../../../assets/hotel3.jpg';
import hotel4 from '../../../assets/hotel4.jpg';
import cottage from '../../../assets/cottage.jpg';
import LayOut from '../LayOut/LayOut';

const BrowseHotel = () => {
  return (
    <LayOut>
      <div className="mt-80 2xsm:mt-60 xsm:mt-30 ssm:mt-9 sm:mt-20 -z-1 w-full 	">
        <h1 className="font-bold text-4xl  text-start mb-7">
          Browse By Different Types of Hotels
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-5 w-full mx-auto">
          <div className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md">
            <img
              src={hotel1}
              alt=""
              className="rounded-md  h-40 object-cover w-full "
            />
            <h1 className="text-xl font-semibold">Hotel</h1>
            <h2 className="text-sm">1,5000 Hotels</h2>
          </div>
          <div className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md">
            <img
              src={cottage}
              alt=""
              className="rounded-md  h-40 object-cover w-full "
            />
            <h1 className="text-xl font-semibold">Cottage</h1>
            <h2 className="text-sm">1,5000 Hotels</h2>
          </div>
          <div className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md">
            <img
              src={hotel2}
              alt=""
              className="rounded-md  h-40 object-cover w-full "
            />
            <h1 className="text-xl font-semibold">Apartment</h1>
            <h2 className="text-sm">1,5000 Hotels</h2>
          </div>
          <div className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md">
            <img
              src={hotel3}
              alt=""
              className="rounded-md  h-40 object-cover w-full "
            />
            <h1 className="text-xl font-semibold">Resort</h1>
            <h2 className="text-sm">1,5000 Hotels</h2>
          </div>
          <div className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md">
            <img
              src={hotel4}
              alt=""
              className="rounded-md  h-40 object-cover w-full "
            />
            <h1 className="text-xl font-semibold">Cabins</h1>
            <h2 className="text-sm">1,5000 Hotels</h2>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default BrowseHotel;
