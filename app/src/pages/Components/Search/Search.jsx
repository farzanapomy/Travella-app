import moment from 'moment';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FaBed } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';

const Search = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openGuest, setOpenGuest] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 2,
    room: 1,
  });
  const handleButton = (name, state) => {
    setOption((pre) => {
      return {
        ...pre,
        [name]: state === 'i' ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  return (
    <div className="relative">
      <div className=" w-4/6 md:w-5/6 h-fit mx-auto bg-[#494545] p-4 px-10 rounded-md text-white  absolute right-0 left-0 -bottom-80 md:-bottom-55 ">
        <h1 className="mb-3 font-semibold ">Book your vacation </h1>
        <div className="flex flex-wrap lg:flex-nowrap w-fit md:w-full mx-auto justify-between items-center gap-3 lg:gap-0">
          <div className="flex justify-between items-center border border-[#979797] rounded-l-lg p-2 gap-2 w-full">
            <div>
              <FaBed />
            </div>
            <div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="border-none outline-none rounded-md px-2 placeholder-[#f8f7f7] bg-[#979797] text-white"
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
          <div className="relative w-full flex  justify-evenly items-center border border-[#979797] p-2  gap-2 rounded-r-lg ">
            <div>
              <IoMdPerson />
            </div>
            <div>
              <span
                className="text-[#D3D3D3] text-sm"
                onClick={() => setOpenGuest(!openGuest)}
              >
                {option?.adult} adult {option?.children} Children {option?.room}{' '}
                room
              </span>
            </div>
            {openGuest && (
              <div className="absolute top-11 right-0  bg-[#494545] p-6  text-sm ">
                <div className="flex justify-between items-center gap-4 mb-2">
                  <span>Adult</span>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      onClick={() => handleButton('adult', 'd')}
                      disabled={option.adult <= 1}
                    >
                      -
                    </button>
                    <span>{option.adult}</span>
                    <button onClick={() => handleButton('adult', 'i')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <span>Children</span>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      onClick={() => handleButton('children', 'd')}
                      disabled={option.children <= 0}
                    >
                      -
                    </button>
                    <span>{option.children}</span>
                    <button onClick={() => handleButton('children', 'i')}>
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <span>Room</span>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      onClick={() => handleButton('room', 'd')}
                      disabled={option.room <= 1}
                      className={`${option.room <= 1 && 'cursor-not-allowed'}`}
                    >
                      -
                    </button>
                    <span>{option.room}</span>
                    <button onClick={() => handleButton('room', 'i')}>+</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button className="bg-[#91CB82] py-2 px-9 rounded-md md:mx-3  ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
