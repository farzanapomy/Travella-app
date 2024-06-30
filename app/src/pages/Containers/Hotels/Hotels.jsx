import moment from 'moment';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import SingleHotel from '../SingleHotel/SingleHotel';
const Hotels = () => {
  const location = useLocation();
  console.log(location);
  const [destination, setDestination] = useState(location?.state?.destination);
  const [option, setOption] = useState(location?.state?.option);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location?.state?.date);
  return (
    <div>
      <div className=" h-fit object-fill  bg-no-repeat opacity-90  bg-blend-multiply">
        <div className="max-w-[1224px] mx-auto ">
          <Navbar />
          <div className="grid grid-cols-3">
            <div className="p-3 col-span-2">
              <SingleHotel />
            </div>
            <div className=" py-10 ">
              <div className="flex flex-col bg-[#EDEDED] p-3">
                <h1 className="font-bold text-3xl">Search</h1>
                <span className="text-xl font-semibold my-3">Destination</span>
                <input
                  type="text"
                  defaultValue={destination}
                  className="  outline-none rounded-md  w-full p-1.5 border border-[#BCD7D3]"
                />
                <span className="text-xl font-semibold my-3">Check in </span>
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
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}
                        className="absolute   top-8  right-0 "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
