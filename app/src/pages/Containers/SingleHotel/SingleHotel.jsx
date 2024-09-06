import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Subscribe from '../../Components/Subscribe/Subscribe';
import img from '../../../assets/apart.jpg';
import img2 from '../../../assets/apart1.jpg';
import img3 from '../../../assets/apart2.jpg';
const SingleHotel = () => {
  return (
    <div className="max-w-[1224px] mx-auto">
      <Navbar />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <p className="text-title-sm font-semibold mb-2 text-[#3A5357]">
              Dubai Tower Apartment
            </p>
            <p>4808 Skinner Hollow Road Days Creek, OR 97429, YK</p>
            <p>Excellent Location</p>
            <div>
              <span>Rating :</span>
              <button className=" text-white  bg-[#3A5357] p-1 rounded">
                4.2
              </button>
            </div>
            <span>
              Book a stay over $123 at this property and get a free airport taxi
            </span>
          </div>
          <button className=" p-1 rounded-md flex-1 bg-[#3A5357] w-5 text-white mx-auto text-center">
            Reverse Or Book Now
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-4">
          <div>
            <img
              src={img}
              alt=""
              className="rounded-md h-70  object-cover w-full "
            />
          </div>
          <div>
            {' '}
            <img
              src={img2}
              alt=""
              className="rounded-md h-70  object-cover w-full "
            />
          </div>
          <div>
            <img
              src={img3}
              alt=""
              className="rounded-md h-70   object-cover w-full "
            />
          </div>
          <div>
            <img
              src={img3}
              alt=""
              className="rounded-md h-70  object-cover w-full "
            />
          </div>
          <div>
            {' '}
            <img
              src={img}
              alt=""
              className="rounded-md h-70  object-cover w-full "
            />
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="rounded-md h-70   object-cover w-full "
            />
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SingleHotel;
