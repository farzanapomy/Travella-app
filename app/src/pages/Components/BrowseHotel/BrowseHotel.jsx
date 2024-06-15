import hotel1 from '../../../assets/hotel1.jpg';
import hotel2 from '../../../assets/hotel2.jpg';
import hotel3 from '../../../assets/hotel3.jpg';
import hotel4 from '../../../assets/hotel4.jpg';
import cottage from '../../../assets/cottage.jpg';

const BrowseHotel = () => {
  return (
    <div className="w-full mx-auto my-2">
      <h1 className="font-bold text-4xl  text-center mb-7">
        Different Types of Hotels
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 w-full mx-auto">
        <div className="cursor-pointer relative">
          <img
            src={hotel1}
            alt=""
            className="rounded-md h-50 w-50 object-cover "
          />
          <h1 className="text-xl font-semibold">Hotel</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer relative">
          <img
            src={cottage}
            alt=""
            className="rounded-md h-50 w-50 object-cover "
          />
          <h1 className="text-xl font-semibold">Cottage</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer relative">
          <img
            src={hotel2}
            alt=""
            className="rounded-md h-50 w-50 object-cover "
          />
          <h1 className="text-xl font-semibold">Apartment</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer relative">
          <img
            src={hotel3}
            alt=""
            className="rounded-md h-50 w-50 object-cover "
          />
          <h1 className="text-xl font-semibold">Resort</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer relative">
          <img
            src={hotel4}
            alt=""
            className="rounded-md h-50 w-50 object-cover "
          />
          <h1 className="text-xl font-semibold">Cabins</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default BrowseHotel;
