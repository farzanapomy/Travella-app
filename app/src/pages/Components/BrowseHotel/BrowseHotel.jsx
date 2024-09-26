import hotel1 from '../../../assets/hotel1.jpg';
import hotel2 from '../../../assets/hotel2.jpg';
import hotel3 from '../../../assets/hotel3.jpg';
import hotel4 from '../../../assets/hotel4.jpg';
import cottage from '../../../assets/cottage.jpg';
import LayOut from '../LayOut/LayOut';
import useFetch from '../../../hooks/useFatch';
import { GETDATABYTYPE } from '../../../urls/urls';

const BrowseHotel = () => {
  const { data, loading, error } = useFetch(GETDATABYTYPE);
  const images = [hotel1, hotel2, hotel3, hotel4, cottage];
  return (
    <LayOut>
      <div className="mt-80 2xsm:mt-60 xsm:mt-30 ssm:mt-9 sm:mt-10 -z-1 w-full 	">
        <div className="text-center mb-9 font-[volkhov]">
          <h1 className="text-3xl mb-1 uppercase">Hotels</h1>
          <h1 className="font-bold text-4xl mb-7">
            {' '}
            Browse By Different Types of Hotels{' '}
          </h1>
        </div>{' '}
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-5 w-full mx-auto">
          {data &&
            images.map((img, i) => (
              <div
                key={i}
                className="cursor-pointer flex-1 border border-[#D3D3D3] p-3 shadow-md"
              >
                <img
                  src={img}
                  alt=""
                  className="rounded-md h-40 object-cover w-full"
                />
                <h1 className="text-xl font-semibold my-2">{data[i].type}</h1>
                <h2 className="text-sm">{data[i]?.count} Properties</h2>
              </div>
            ))}
        </div>
      </div>
    </LayOut>
  );
};

export default BrowseHotel;
