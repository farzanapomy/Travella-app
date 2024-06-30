import hotel1 from '../../../assets/hotel1.jpg';
import hotel2 from '../../../assets/hotel2.jpg';
import hotel3 from '../../../assets/hotel3.jpg';
import hotel4 from '../../../assets/hotel4.jpg';
import cottage from '../../../assets/cottage.jpg';

const SingleHotel = () => {
  return (
    <div className='p-10 pl-0'>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-5 w-full mx-auto">
        <div className="cursor-pointer flex-1">
          <img
            src={hotel1}
            alt=""
            className="rounded-md  h-40 object-cover w-full "
          />
          <h1 className="text-xl font-semibold">Hotel</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer flex-1">
          <img
            src={cottage}
            alt=""
            className="rounded-md  h-40 object-cover w-full "
          />
          <h1 className="text-xl font-semibold">Cottage</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer flex-1">
          <img
            src={hotel2}
            alt=""
            className="rounded-md  h-40 object-cover w-full "
          />
          <h1 className="text-xl font-semibold">Apartment</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer flex-1">
          <img
            src={hotel3}
            alt=""
            className="rounded-md  h-40 object-cover w-full "
          />
          <h1 className="text-xl font-semibold">Resort</h1>
          <h2 className="text-sm">1,5000 Hotels</h2>
        </div>
        <div className="cursor-pointer flex-1">
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
  );
};

export default SingleHotel;
