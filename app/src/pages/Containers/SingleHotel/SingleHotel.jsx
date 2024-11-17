import { useContext, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFatch';
import { SearchContext } from '../../../reducer/useSearchReducer';
import { SEARCHHOTELS } from '../../../urls/urls';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Subscribe from '../../Components/Subscribe/Subscribe';
import moment from 'moment';
import { AuthContext } from '../../../reducer/useAuthReducer';
import BookModal from '../../Components/BookModal/BookModal';

const SingleHotel = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${SEARCHHOTELS}/find/${id}`);
  const { destination, option, date } = useContext(SearchContext);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const nav = useNavigate();
  console.log(destination, option, date);
  let difference;
  const getDateDifference = () => {
    if (date && date[0] && date[0].startDate && date[0].endDate) {
      const { startDate, endDate } = date[0];
      difference = moment(endDate).diff(moment(startDate), 'days');
      return difference > 0 ? difference : 1;
    }
    return 1;
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      nav('/login');
    }
  };
  return (
    <div className="max-w-[1224px] mx-auto">
      <Navbar />
      {loading
        ? 'Loading'
        : data && (
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start gap-y-2">
                  <p className="text-3xl font-semibold mb-2 text-[#3A5357]">
                    {data?.name}
                  </p>
                  <p className="flex justify-start items-center gap-2">
                    <FaLocationDot />
                    {data?.address}{' '}
                  </p>
                  <p>Excellent Location - {data?.distance}m from center</p>
                  <div>
                    <button className=" text-white  bg-[#3A5357] p-0.5 mx-1 rounded">
                      4.2
                    </button>
                    <span>Rating </span>
                  </div>
                  <span className="text-[#3A5357] text-base">
                    Book a stay over ${data?.cheapestPrice} at this property and
                    get a free airport taxi
                  </span>
                </div>
                <div className="w-fit">
                  <button
                    className="px-2 p-1 rounded-md flex-1 bg-[#3A5357]  text-white mx-auto text-center"
                    onClick={handleClick}
                  >
                    Reverse Or Book Now
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-4">
                {data?.photos?.map((photo) => {
                  <div>
                    <img
                      src={photo}
                      alt=""
                      className="rounded-md h-60  object-cover w-full "
                    />
                  </div>;
                })}
              </div>
              <div className="mt-14">
                <div>
                  <h1 className="text-3xl font-semibold mb-7">{data?.title}</h1>
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <p className="items-start">{data?.description}</p>
                    <div className="flex flex-col justify-start items-start flex-grow gap-y-4 shadow-lg p-6">
                      <span className="font-semibold">
                        Perfect for {difference} night stay
                      </span>
                      <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Iure, modi.
                      </span>
                      <div className="font-bold text-xl">
                        <span>
                          {/* ${difference * data?.cheapestPrice}{' '} */}$
                          {getDateDifference() * data?.cheapestPrice}{' '}
                          <span className="font-normal text-base">
                            ({difference} Nights)
                          </span>
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
          )}
      {openModal && <BookModal setOpenModal={setOpenModal} id={id} />}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SingleHotel;
