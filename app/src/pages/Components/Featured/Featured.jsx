import feature1 from '../../../assets/feature1.jpg';
import feature2 from '../../../assets/feature2.jpeg';
import feature3 from '../../../assets/feature3.jpg';
import useFetch from '../../../hooks/useFatch';
import { GETDATABYCITY } from '../../../urls/urls';
import LayOut from '../LayOut/LayOut';
const Featured = () => {
  const { data, loading, error } = useFetch(GETDATABYCITY);
  return (
    <LayOut>
      <div className="w-full mx-auto my-2">
        <div className="text-center mb-9 font-[volkhov]">
          <h1 className="text-3xl mb-1 uppercase">Feature</h1>
          <h1 className="font-bold text-4xl mb-7">Browse By Feature We Have</h1>
        </div>
        {loading ? (
          <p>Loading! Please wait.</p>
        ) : error ? (
          <p>Something went wrong</p>
        ) : data && data.length > 1 ? (
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-5 w-full mx-auto -z-1">
            <div className="cursor-pointer relative">
              <div>
                <img
                  src={feature1}
                  alt="Thailand"
                  className="rounded-md h-80 cursor-pointer w-96 object-cover"
                />
              </div>
              <div className="text-white absolute bottom-5 p-2">
                <h1 className="font-bold tracking-wider text-3xl">USA</h1>
                <h2 className="text-title-md">{data[0]} properties</h2>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <div>
                <img
                  src={feature2}
                  alt="Japan"
                  className="rounded-md h-80 cursor-pointer w-96 object-cover"
                />
              </div>
              <div className="text-white absolute bottom-5 p-2">
                <h1 className="font-bold tracking-wider text-3xl">Japan</h1>
                <h2 className="text-title-md">{data[1]} properties</h2>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <div>
                <img
                  src={feature3}
                  alt="Singapore"
                  className="rounded-md h-80 cursor-pointer w-96 object-cover"
                />
              </div>
              <div className="text-white absolute bottom-5 p-2">
                <h1 className="font-bold tracking-wider text-3xl">New York</h1>
                <h2 className="text-title-md">{data[2]} properties</h2>
              </div>
            </div>
            <div className="cursor-pointer relative">
              <div>
                <img
                  src={feature1}
                  alt="Dubai"
                  className="rounded-md h-80 cursor-pointer w-96 object-cover"
                />
              </div>
              <div className="text-white absolute bottom-5 p-2">
                <h1 className="font-bold tracking-wider text-3xl">Dubai</h1>
                <h2 className="text-title-md">{data[3]} properties</h2>
              </div>
            </div>
          </div>
        ) : (
          <p>No Data Available</p>
        )}
      </div>
    </LayOut>
  );
};

export default Featured;
