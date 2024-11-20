import rating1 from '../../../assets/rating1.jpg';
import rating2 from '../../../assets/rating2.jpg';
import rating3 from '../../../assets/rating3.jpg';
import rating4 from '../../../assets/rating4.jpg';
import { CiStar } from 'react-icons/ci';
import LayOut from '../LayOut/LayOut';
import useFetch from '../../../hooks/useFetch';
import { GETSEARCHDATA } from '../../../urls/urls';

const Recommended = () => {
  const { data, loading, error } = useFetch(GETSEARCHDATA);
  console.log(data);
  const images = [rating1, rating2, rating3, rating4];
  return (
    <LayOut>
      <div className="w-full mx-auto my-2 mt-10">
        <div className="text-center mb-9 font-[volkhov]">
          <h1 className="text-3xl mb-1 uppercase">Recommended</h1>
          <h1 className="font-bold text-3xl mb-7">
            Browse All the Recommended Hotels By Client
          </h1>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 w-full mx-auto">
          {loading
            ? 'loading'
            : data &&
              images.map((img, i) => (
                <div
                  className="cursor-pointer border border-[#D3D3D3] p-3 shadow-md"
                  key={i}
                >
                  <img
                    src={img}
                    alt=""
                    className="rounded-md h-60 object-cover w-full "
                  />
                  <p className=" font-semibold text-xl">{data[i]?.name}</p>
                  <div className="flex mt-2 justify-between gap-10">
                    <p className=" ">{data[i]?.city}</p>
                    <p className=" font-semibold text-xl ">
                      ${data[i]?.cheapestPrice}
                    </p>
                  </div>
                  <div className="flex mt-2 justify-between items-center gap-3">
                    <div className="flex gap-2 justify-start items-center">
                      <button className=" text-white  bg-[#3A5357] p-1 rounded">
                        4.2
                      </button>
                      <div className="flex justify-start items-center">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                      </div>
                    </div>
                    <span className="text-title-md text-[#3A5357]">
                      Excellent
                    </span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </LayOut>
  );
};

export default Recommended;
