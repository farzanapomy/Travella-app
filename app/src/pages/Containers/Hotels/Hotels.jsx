import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
const Hotels = () => {
  const location = useLocation();
  console.log(location);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <div>
      <div className=" h-fit object-fill  bg-no-repeat opacity-90  bg-blend-multiply">
        <div className="max-w-[1224px] mx-auto ">
          <Navbar />
          <div className="grid grid-cols-3">
            <div className="flex flex-col p-3">
              <h1 className="font-bold text-3xl">Search</h1>
              <span className="text-xl font-semibold my-3">Destination</span>
              <input
                type="text"
                placeholder="Dubai"
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
                      className="absolute   top-8  right-0 "
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="p-3">Component</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
