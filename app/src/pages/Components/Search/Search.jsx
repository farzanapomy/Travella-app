import moment from 'moment';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FaBed } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import './search.css';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
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
    <div className="">
      <div className=" w-5/6 lg:w-full h-fit mx-auto rounded-md absolute right-0 left-0 -bottom-80 md:-bottom-65 py-8 px-4 md:px-14 bg-[#3A5357] text-white">
        <h1 className="mb-3 font-semibold text-2xl">Book your vacation </h1>
        <div className="flex flex-wrap lg:flex-nowrap w-fit md:w-full mx-auto justify-between items-center gap-3 lg:gap-0">
          <div className="flex justify-between items-center border border-[#979797] rounded-l-lg p-2 gap-2 w-full">
            <div>
              <FaBed />
            </div>
            <div>
              <input
                type="text"
                placeholder="Where are you going?"
                className="border-none outline-none rounded-md  w-full p-1.5  "
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>
          <div className=" w-full flex justify-between items-center border border-[#979797] p-2 gap-2  ">
            <div>
              <SlCalender />
            </div>
            <div className="relative py-1.5">
              <span className="text-[#f5eeee] text-sm ">
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${moment(date[0]?.startDate).format('MM/DD/YYYY')}`} to{' '}
                  {`${moment(date[0]?.endDate).format('MM/DD/YYYY')}`}
                </span>
              </span>
              <div className=" bg-[#e5e4cccc]">
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute bg-[#e5e4cc]  top-8  right-0 "
                  />
                )}
              </div>
            </div>
          </div>
          <div className="relative w-full flex  justify-between items-center border border-[#979797] p-3.5  gap-2 rounded-r-lg  ">
            <div>
              <IoMdPerson />
            </div>
            <div className="">
              <span
                className="text-[#f5eeee] text-sm "
                onClick={() => setOpenGuest(!openGuest)}
              >
                {option?.adult} adult {option?.children} Children {option?.room}
                room
              </span>
            </div>
            {openGuest && (
              <div className="absolute top-10 right-0    shadow-3 bg-[#e5e4cccc] p-6  text-sm z-10 rounded-md">
                <div className="flex justify-between items-center gap-4 mb-2">
                  <span>Adult</span>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      onClick={() => handleButton('adult', 'd')}
                      disabled={option.adult <= 1}
                      className={`${
                        option.adult <= 0 && 'cursor-not-allowed'
                      } border px-1.5`}
                    >
                      -
                    </button>
                    <span>{option.adult}</span>
                    <button
                      onClick={() => handleButton('adult', 'i')}
                      className="border px-1.5"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3 mb-2">
                  <span>Children</span>
                  <div className="flex justify-between items-center gap-2">
                    <button
                      className="border px-1.5"
                      onClick={() => handleButton('children', 'd')}
                      disabled={option.children <= 0}
                    >
                      -
                    </button>
                    <span>{option.children}</span>
                    <button
                      className="border px-1.5"
                      onClick={() => handleButton('children', 'i')}
                    >
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
                      className={`${
                        option.room <= 1 && 'cursor-not-allowed'
                      } border px-1.5`}
                    >
                      -
                    </button>
                    <span>{option.room}</span>
                    <button
                      className="border px-1.5"
                      onClick={() => handleButton('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button
              className="bg-[#91CB82] py-2.5 px-9 rounded-md md:mx-3 "
              onClick={() =>
                navigate('/hotels', {
                  state: { destination, option, date },
                })
              }
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
