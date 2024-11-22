import { MdOutlineCancel } from 'react-icons/md';
import useFetch from '../../../hooks/useFetch';
import { GETHOTELROOMS } from '../../../urls/urls';
import { useState } from 'react';

const BookModal = ({ setOpenModal, id }) => {
  const { data, loading, error } = useFetch(`${GETHOTELROOMS}/${id}`);
  const [selectItem, setSelectItem] = useState([]);
  console.log('Fetched data:', data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;

  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectItem(
      selected
        ? [...selectItem, value]
        : selectItem?.filter((item) => item !== value)
    );
  };
  console.log(selectItem);
  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-4/5 max-w-md">
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
                <div key={item.id} className="p-4 border rounded-lg">
                  <div>
                    <strong>Title:</strong> {item?.title}
                  </div>
                  <div>
                    <strong>Price:</strong> ${item?.price}
                  </div>
                  <div>
                    <strong>Max People:</strong> <b>{item?.maxPeople}</b>
                  </div>
                  <div>
                    <strong>Description:</strong> {item?.desc}
                  </div>
                  <div>
                    {item.roomInfo.map((room) => (
                      <>
                        <label htmlFor="">{room?.roomNumber}</label>
                        <input
                          type="checkbox"
                          value={room?._id}
                          onChange={handleSelect}
                        />
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No rooms available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookModal;
