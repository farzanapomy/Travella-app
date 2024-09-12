import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Subscribe from '../../Components/Subscribe/Subscribe';
import img from '../../../assets/apart.jpg';
import img2 from '../../../assets/apart1.jpg';
import img3 from '../../../assets/apart2.jpg';
import { FaLocationDot } from 'react-icons/fa6';

const SingleHotel = () => {
  return (
    <div className="max-w-[1224px] mx-auto">
      <Navbar />
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-y-2">
            <p className="text-3xl font-semibold mb-2 text-[#3A5357]">
              Dubai Tower Apartment
            </p>
            <p className="flex justify-start items-center gap-2">
              <FaLocationDot />
              4808 Skinner Hollow Road Days Creek, OR 97429, YK
            </p>
            <p>Excellent Location - 200m from center</p>
            <div>
              <button className=" text-white  bg-[#3A5357] p-0.5 mx-1 rounded">
                4.2
              </button>
              <span>Rating </span>
            </div>
            <span className="text-[#3A5357] text-base">
              Book a stay over $123 at this property and get a free airport taxi
            </span>
          </div>
          <div className="w-fit">
            <button className="px-2 p-1 rounded-md flex-1 bg-[#3A5357]  text-white mx-auto text-center">
              Reverse Or Book Now
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-4">
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
        </div> */}
        <div className="mt-14">
          <div>
            <h1 className="text-3xl font-semibold mb-7">
              Stay in the heart of krakow
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <p className="items-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam odio obcaecati nulla, maiores odit alias accusantium.
                Maxime exercitationem iure a aliquid ad eaque earum error
                ratione quidem? Aliquid velit earum temporibus veritatis nihil
                doloremque enim suscipit dignissimos! Expedita, facere. Magnam
                modi labore facilis, excepturi tempora saepe atque incidunt
                quibusdam quam?
              </p>
              <div className="flex flex-col justify-start items-start flex-grow gap-y-4 shadow-lg p-6">
                <span className="font-semibold">Perfect for a night stay</span>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iure, modi.
                </span>
                <div className="font-bold text-xl">
                  <span>
                    $1000{' '}
                    <span className="font-normal text-base">(5 Nights)</span>
                  </span>
                </div>
                <div className="w-fit">
                  <button className="px-2 p-1 rounded-md flex-1 bg-[#3A5357]  text-white mx-auto text-center">
                    Reverse Or Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SingleHotel;
