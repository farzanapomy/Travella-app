import feature1 from '../../../assets/feature1.jpg';
import feature2 from '../../../assets/feature2.jpeg';
import feature3 from '../../../assets/feature3.jpg';
const Featured = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 w-full mx-auto">
      <div className="relative ">
        <div className="w-full bg-blend-darken">
          <img
            src={feature1}
            alt=""
            className="rounded-md h-75 w-70 object-cover "
          />
        </div>
        <div className="absolute bottom-5">
          <h1 className="text-white font-bold  text-2xl">Thailand</h1>
          <h2>102 properties</h2>
        </div>
      </div>
      <div className=" ">
        <div className="w-full ">
          <img
            src={feature2}
            alt=""
            className="rounded-md h-75 w-70 object-cover"
          />
        </div>
        <div>
          <h1>Japan</h1>
          <h2>102 properties</h2>
        </div>
      </div>
      <div className=" ">
        <div className="w-full ">
          <img
            src={feature3}
            alt=""
            className="rounded-md h-75 w-70 object-cover"
          />
        </div>
        <div>
          <h1>Singapore</h1>
          <h2>102 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
