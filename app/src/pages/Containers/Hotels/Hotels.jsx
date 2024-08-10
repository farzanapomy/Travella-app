import moment from 'moment';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import SearchHotels from '../../Components/SearchHotels/SearchHotels';
import plane from '../../../assets/plane.svg';
const Hotels = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location?.state?.destination);
  const [option, setOption] = useState(location?.state?.option);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location?.state?.date);
  return (
    <div className="">
      <div className=" h-fit object-fill  bg-no-repeat opacity-90  bg-blend-multiply">
        <div className="max-w-[1224px] mx-auto ">
          <Navbar />
          <div className="flex justify-center items-center px-2">
            <h1 className="font-bold text-3xl">Searched Hotels</h1>
            <div>
              <img
                src={plane}
                alt=""
                className="rounded-md h-70  object-cover w-full"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 ">
            <div className=" py-10 px-8 w-full mx-auto">
              <div className="flex px-5 flex-col bg-[#EDEDED] p-3 rounded-md">
                <h1 className="font-bold text-3xl">Search</h1>
                <span className="mt-5">Destination</span>
                <input
                  type="text"
                  defaultValue={destination}
                  className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                />
                <span className="">Check in </span>
                <div className="relative py-1.5 w-full  p-1.5 border border-[#BCD7D3]">
                  <span className="  outline-none rounded-md ">
                    <span onClick={() => setOpenDate(!openDate)}>
                      {`${moment(date[0]?.startDate).format('MM/DD/YYYY')}`} to{' '}
                      {`${moment(date[0]?.endDate).format('MM/DD/YYYY')}`}
                    </span>
                  </span>
                  <div className="  ">
                    {openDate && (
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item?.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className="absolute   top-8  right-0 "
                      />
                    )}
                  </div>
                </div>
                <div className="my-2">
                  <div className="flex flex-col">
                    <span>
                      Min Price <small>Per Night</small>
                    </span>
                    <input
                      type="number"
                      min={0}
                      className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                    />
                  </div>
                  <div>
                    <span>
                      Max Price <small>Per Night</small>
                    </span>
                    <input
                      type="number"
                      min={0}
                      className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                    />
                  </div>
                  <div>
                    <span>Adult</span>
                    <input
                      type="number"
                      className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                      placeholder={option?.adult}
                      min={1}
                    />
                  </div>
                  <div>
                    <span>Children </span>
                    <input
                      type="number"
                      className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                      placeholder={option?.children}
                      min={0}
                    />
                  </div>
                  <div>
                    <span>Room </span>
                    <input
                      type="number"
                      className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                      placeholder={option?.room}
                      min={1}
                    />
                  </div>{' '}
                </div>
              </div>
            </div>
            <div className="py-10 col-span-2 grid grid-cols-1  md:grid-cols-3 gap-3">
              <SearchHotels />
              <SearchHotels />
              <SearchHotels />
              <SearchHotels />
              <SearchHotels />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
