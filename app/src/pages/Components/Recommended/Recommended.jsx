import rating1 from '../../../assets/rating1.jpg';
import rating2 from '../../../assets/rating2.jpg';
import rating3 from '../../../assets/rating3.jpg';
import rating4 from '../../../assets/rating4.jpg';

const Recommended = () => {
  return (
    <div className="w-full mx-auto my-2">
      <h1 className="font-bold text-4xl  text-start mb-7">
        Recommended By Client
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 w-full mx-auto">
        <div>
          <img
            src={rating1}
            alt=""
            className="rounded-md h-60 object-cover w-full "
          />
          <p className=" font-bold text-2xl">Hotel of Dubai</p>
          <div className="flex mt-2 justify-between gap-10">
            <p className="font-medium text-xl">Dubai</p>
            <p className=" font-semibold text-xl ">$1500</p>
          </div>
          <div className="flex mt-2 justify-start items-center gap-3">
            <button className=" text-white  bg-[#3A5357] p-1 rounded">4.2</button>
            <span className="text-title-md text-[#3A5357]">Excellent</span>
          </div>
        </div>
        <div>
          <img
            src={rating2}
            alt=""
            className="rounded-md h-60 object-cover w-full "
          />
          <p className=" font-bold text-2xl">Hotel of Dubai</p>
          <div className="flex mt-2 justify-between gap-10">
            <p className="font-medium text-xl">Dubai</p>
            <p className=" font-semibold text-xl ">$1500</p>
          </div>
          <div className="flex mt-2 justify-start items-center gap-3">
            <button className=" text-white  bg-[#3A5357] p-1 rounded">4.2</button>
            <span className="text-title-md text-[#3A5357]">Excellent</span>
          </div>
        </div>
        <div>
          <img
            src={rating3}
            alt=""
            className="rounded-md h-60 object-cover w-full "
          />
          <p className=" font-bold text-2xl">Hotel of Dubai</p>
          <div className="flex mt-2 justify-between gap-10">
            <p className="font-medium text-xl">Dubai</p>
            <p className=" font-semibold text-xl ">$1500</p>
          </div>
          <div className="flex mt-2 justify-start items-center gap-3">
            <button className=" text-white  bg-[#3A5357] p-1 rounded">4.2</button>
            <span className="text-title-md text-[#3A5357]">Excellent</span>
          </div>
        </div>
        <div>
          <img
            src={rating4}
            alt=""
            className="rounded-md h-60 object-cover w-full "
          />
          <p className=" font-bold text-2xl">Hotel of Dubai</p>
          <div className="flex mt-2 justify-between gap-10">
            <p className="font-medium text-xl">Dubai</p>
            <p className=" font-semibold text-xl ">$1500</p>
          </div>
          <div className="flex mt-2 justify-start items-center gap-3">
            <button className=" text-white  bg-[#3A5357] p-1 rounded">4.2</button>
            <span className="text-title-md text-[#3A5357]">Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
