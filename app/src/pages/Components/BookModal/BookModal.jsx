import { MdOutlineCancel } from 'react-icons/md';
import useFetch from '../../../hooks/useFetch';
import { GETDATEAVAIL, GETHOTELROOMS } from '../../../urls/urls';
import { useContext, useState } from 'react';
import { SearchContext } from '../../../reducer/useSearchReducer';
import axios from 'axios';

const BookModal = ({ setOpenModal, id }) => {
  const { data, loading, error } = useFetch(`${GETHOTELROOMS}/${id}`);
  const [selectItem, setSelectItem] = useState([]);
  const { date } = useContext(SearchContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectItem(
      selected
        ? [...selectItem, value]
        : selectItem.filter((item) => item !== value)
    );
  };

  const countDates = (startDate, endDate) => {
    const allDates = [];
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
      allDates.push(currentDate.toISOString().split('T')[0]); // Consistent date format
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return allDates;
  };

  const allDates = countDates(date[0]?.startDate, date[0]?.endDate);

  const isBooked = (roomNumber) => {
    const bookedDates = roomNumber?.bookedDates?.map((date) =>
      new Date(date).toISOString().split('T')[0]
    );
    return !bookedDates?.some((bookedDate) => allDates.includes(bookedDate));
  };

  const handleBook = async () => {
    try {
      const responses = await Promise.all(
        selectItem.map(async (room) => {
          const res = await axios.put(`${GETDATEAVAIL}/${room}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpenModal(false)
      console.log("All rooms booked successfully:", responses);
    } catch (error) {
      console.error("Error booking rooms:", error);
    }
  };

  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center bg-body">
      <div className="bg-white p-4 rounded-lg w-4/5 max-w-md h-[80vh] overflow-y-auto">
        <div className="flex justify-end">
          <MdOutlineCancel
            className="text-xl cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Select Your Rooms:</h2>
          {data.length > 0 ? (
            <div className="space-y-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <div>
                    <p className="font-bold">{item?.title}</p>
                    <p>{item?.desc}</p>
                    <p className="text-sm">
                      Max People: <b>{item?.maxPeople}</b>
                    </p>
                    <p className="font-bold">${item?.price}</p>
                  </div>
                  <div className="flex justify-between items-center gap-5">
                    {item.roomInfo.map((room) => (
                      <div
                        key={room?._id}
                        className="flex-col justify-around items-center"
                      >
                        <label htmlFor={`room-${room?._id}`} className="block text-center">
                          {room?.roomNumber}
                        </label>
                        <input
                          id={`room-${room?._id}`}
                          type="checkbox"
                          value={room?._id}
                          onChange={handleSelect}
                          disabled={!isBooked(room)}
                          className="block text-center"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No rooms available.</div>
          )}
        </div>
        <button
           className="bg-[#91CB82] py-2 px-9 rounded-md mx-auto  text-white font-semibold hover:bg-green-600 transition w-full mt-5"
          onClick={handleBook}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookModal;
