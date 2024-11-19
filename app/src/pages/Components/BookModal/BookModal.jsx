import { MdOutlineCancel } from 'react-icons/md';
const BookModal = ({ setOpenModal, id }) => {
  console.log(id);
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
