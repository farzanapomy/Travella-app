import feature1 from '../../../assets/feature1.jpg';
import feature2 from '../../../assets/feature2.jpeg';
import feature3 from '../../../assets/feature3.jpg';
import useFetch from '../../../hooks/useFatch';
import { GETDATABYCITY } from '../../../urls/urls';
import LayOut from '../LayOut/LayOut';
const Featured = () => {
  const { data, loading, error } = useFetch(GETDATABYCITY);
  console.log(data);
  return (
    <LayOut>
      <div className="w-full mx-auto my-2">
        <h1 className="font-bold text-4xl  text-start mb-7">
          Browse By Feature{' '}
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 w-full mx-auto    -z-1 ">
          <div className="cursor-pointer relative  ">
            <div className=" ">
              <img
                src={feature1}
                alt=""
                className="rounded-md h-80 cursor-pointer w-96 object-cover "
              />
            </div>
            <div className="text-white  absolute bottom-5 p-2">
              <h1 className="font-bold tracking-wider	 text-3xl">Thailand</h1>
              <h2 className="text-title-md">102 properties</h2>
            </div>
          </div>
          <div className="cursor-pointer relative  ">
            <div className=" ">
              <img
                src={feature2}
                alt=""
                className="rounded-md h-80 cursor-pointer w-96 object-cover "
              />
            </div>
            <div className="text-white  absolute bottom-5 p-2">
              <h1 className="font-bold tracking-wider text-3xl">Japan</h1>
              <h2 className="text-title-md">102 properties</h2>
            </div>
          </div>
          <div className="cursor-pointer relative  ">
            <div className=" ">
              <img
                src={feature3}
                alt=""
                className="rounded-md h-80 cursor-pointer w-96 object-cover "
              />
            </div>
            <div className="text-white  absolute bottom-5 p-2">
              <h1 className="font-bold tracking-wider	 text-3xl">Singapore</h1>
              <h2 className="text-title-md">102 properties</h2>
            </div>
          </div>
          <div className="cursor-pointer relative  ">
            <div className=" ">
              <img
                src={feature1}
                alt=""
                className="rounded-md h-80 cursor-pointer w-96 object-cover "
              />
            </div>
            <div className="text-white  absolute bottom-5 p-2">
              <h1 className="font-bold tracking-wider	 text-3xl">Dubai</h1>
              <h2 className="text-title-md">102 properties</h2>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Featured;
