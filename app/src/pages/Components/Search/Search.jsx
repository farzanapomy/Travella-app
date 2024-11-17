import moment from 'moment';
import { useContext, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { FaBed } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import { SlCalender } from 'react-icons/sl';
import './search.css';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../reducer/useSearchReducer';

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
    children: 0,
    room: 1,
  });
  const { dispatch } = useContext(SearchContext);

  const handleButton = (name, state) => {
    setOption((prev) => ({
      ...prev,
      [name]: state === 'i' ? option[name] + 1 : option[name] - 1,
    }));
  };

  const handleSubmit = () => {
    dispatch({
      type: 'NEW_SEARCH_STATE',
      payload: { destination, option, date },
    });
    navigate('/hotels', {
      state: { destination, option, date },
    });
  };

  return (
    <div className="w-full mx-auto mt-10 px-5">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md relative bg-[#3A5357]">
        <h1 className="text-2xl font-bold mb-4">Plan Your Perfect To Stay</h1>
        <div className="flex flex-wrap gap-4 justify-center items-center  border border-[#979797] rounded">
          <div className="flex items-center bg-gray-700 p-3 rounded-md w-full lg:w-1/4  border border-[#979797] ">
            <FaBed className="mr-2 text-lg" />
            <input
              type="text"
              placeholder="Where to?"
              className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          {/* Date Picker */}
          <div className="relative w-full lg:w-1/4  border border-[#979797] ">
            <div
              onClick={() => setOpenDate(!openDate)}
              className="flex items-center bg-gray-700 p-3 rounded-md cursor-pointer"
            >
              <SlCalender className="mr-2 text-lg" />
              <span className="text-white text-sm">
                {`${moment(date[0]?.startDate).format('MM/DD/YYYY')}`} to
                {`${moment(date[0]?.endDate).format('MM/DD/YYYY')}`}
              </span>
            </div>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="absolute z-10 mt-2 bg-white text-gray-800 p-4 rounded-md shadow-md"
              />
            )}
          </div>
          {/* Guests */}
          <div className="relative w-full lg:w-1/4 border border-[#979797] ">
            <div
              onClick={() => setOpenGuest(!openGuest)}
              className="flex items-center bg-gray-700 p-3 rounded-md cursor-pointer"
            >
              <IoMdPerson className="mr-2 text-lg" />
              <span className="text-white text-sm">
                {option.adult} Adults, {option.children} Children, {option.room}{' '}
                Room
              </span>
            </div>
            {openGuest && (
              <div className="absolute z-10 mt-2 bg-white text-black text-gray-800 p-4 rounded-md shadow-md w-full lg:w-auto">
                <div className="flex justify-between items-center mb-2 gap-8">
                  <span>Adults</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleButton('adult', 'd')}
                      disabled={option.adult <= 1}
                      className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{option.adult}</span>
                    <button
                      onClick={() => handleButton('adult', 'i')}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Children</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleButton('children', 'd')}
                      disabled={option.children <= 0}
                      className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{option.children}</span>
                    <button
                      onClick={() => handleButton('children', 'i')}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Room</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleButton('room', 'd')}
                      disabled={option.room <= 1}
                      className="px-2 py-1 border rounded disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{option.room}</span>
                    <button
                      onClick={() => handleButton('room', 'i')}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Search Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#91CB82] py-2.5 px-9 rounded-md mx-auto  text-white font-semibold hover:bg-green-600 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
