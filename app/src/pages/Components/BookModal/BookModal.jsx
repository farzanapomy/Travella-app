import { MdOutlineCancel } from 'react-icons/md';
import useFetch from '../../../hooks/useFetch';
import { GETHOTELROOMS } from '../../../urls/urls';
const BookModal = ({ setOpenModal, id }) => {
  const { data, loading, error } = useFetch(`${GETHOTELROOMS}/${id}`);
  console.log(data);
  return (
    <div className="absolute inset-0">
      <div>
        <MdOutlineCancel onClick={() => setOpenModal(false)} />
      </div>
      <div>
        <span>Select Your Rooms: </span>
      </div>
    </div>
  );
};

export default BookModal;
