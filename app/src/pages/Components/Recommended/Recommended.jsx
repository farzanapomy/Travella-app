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
          <img src={rating1} alt="" />
          <p className=" font-semibold text-xl">Hotel of Dubai</p>
          <div className="flex mt-2 justify-between gap-10">
            <p>Dubai</p>
            <p className=" font-semibold text-xl ">$1500</p>
          </div>
          <div className="flex mt-2 justify-between gap-10">
            <button>4.2</button>
            <span>Excellent</span>
          </div>
        </div>
        <div>
          <img src={rating2} alt="" />
          <span>Hotel of Dubai</span>
          <span>Dubai</span>
          <span>$1500</span>
          <div>
            <button>4.2</button>
            <span>Excellent</span>
          </div>
        </div>
        <div>
          <img src={rating3} alt="" />
          <span>Hotel of Dubai</span>
          <span>Dubai</span>
          <span>$1500</span>
          <div>
            <button>4.2</button>
            <span>Excellent</span>
          </div>
        </div>
        <div>
          <img src={rating4} alt="" />
          <span>Hotel of Dubai</span>
          <span>Dubai</span>
          <span>$1500</span>
          <div>
            <button>4.2</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
