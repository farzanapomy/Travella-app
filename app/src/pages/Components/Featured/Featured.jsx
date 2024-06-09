import feature1 from '../../../assets/feature1.jpg';
import feature2 from '../../../assets/feature2.jpeg';
import feature3 from '../../../assets/feature3.jpg';
const Featured = () => {
  return (
    <div className="mt-60 2xsm:mt-20 xsm:mt-40 ssm:mt-9">
      <h1 className="font-bold text-4xl  text-center mb-7">Our Featured </h1>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 w-full mx-auto    -z-1 ">
        <div className="relative   ">
          <div className=" bg-gradient-to-r from-indigo-500">
            <img
              src={feature1}
              alt=""
              className="rounded-md h-75 w-70 object-cover opacity-80"
            />
          </div>
          <div className="text-white  absolute bottom-5 p-2">
            <h1 className="font-bold tracking-wider	 text-3xl">Thailand</h1>
            <h2 className="text-title-md">102 properties</h2>
          </div>
        </div>
        <div className="relative   ">
          <div className=" bg-gradient-to-r from-indigo-500">
            <img
              src={feature2}
              alt=""
              className="rounded-md h-75 w-70 object-cover opacity-80"
            />
          </div>
          <div className="text-white  absolute bottom-5 p-2">
            <h1 className="font-bold tracking-wider text-3xl">Japan</h1>
            <h2 className="text-title-md">102 properties</h2>
          </div>
        </div>
        <div className="relative   ">
          <div className=" bg-gradient-to-r from-indigo-500">
            <img
              src={feature3}
              alt=""
              className="rounded-md h-75 w-70 object-cover opacity-80"
            />
          </div>
          <div className="text-white  absolute bottom-5 p-2">
            <h1 className="font-bold tracking-wider	 text-3xl">Singapore</h1>
            <h2 className="text-title-md">102 properties</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
