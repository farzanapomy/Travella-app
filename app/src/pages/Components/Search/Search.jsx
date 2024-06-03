import { FaBed } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  return (
    <div className=" relative">
      <div className="w-full h-fit mx-auto bg-[#494545] p-4 px-10 rounded-md text-white  absolute -bottom-65">
        <h1 className="mb-3 font-semibold ">Book your vacation </h1>
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center border border-[#979797] rounded-l-lg p-2 gap-2 w-full">
            <div>
              <FaBed />
            </div>
            <div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="border-none outline-none rounded-md px-2"
              />
            </div>
          </div>
          <div
            className="w-full flex justify-between items-center border border-[#979797] p-2 gap-2"
            onClick={() => setOpenDate(!openDate)}
          >
            <div>
              <SlCalender />
            </div>
            <div className="relative">
              <span className="text-[#D3D3D3] text-sm">
                <span>
                  {`${moment(date[0]?.startDate).format('MM/DD/YYYY')}`} to{' '}
                  {`${moment(date[0]?.endDate).format('MM/DD/YYYY')}`}
                </span>
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-8  right-0  "
                />
              )}
            </div>
          </div>
          <div className="w-full flex  justify-between items-center border border-[#979797] px-4 py-2  gap-2 rounded-r-lg ">
            <div>
              <IoMdPerson />
            </div>
            <div>
              <span className="text-[#D3D3D3] text-sm">
                2 adult 2 children 1 room
              </span>
            </div>
          </div>
          <div>
            <button className="bg-[#91CB82] py-2.5 px-9 rounded-md mx-3">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
