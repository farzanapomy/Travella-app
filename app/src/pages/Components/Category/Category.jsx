import tourGuide from '../../../assets/tour-guide 1.png';
import travelling from '../../../assets/travelling 1.png';
import hands from '../../../assets/hands 1.png';
import medical from '../../../assets/medical-team 1.png';
import LayOut from '../LayOut/LayOut';
const Category = () => {
  return (
    <LayOut>
      <div className="w-full mx-auto my-2 ">
        <div className="text-center mb-9 font-[volkhov]">
          <h2 className="text-2xl">CATEGORY</h2>
          <h1 className="text-4xl font-semibold my-2">
            We Offer Best Services
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center w-full mx-auto">
          <div className="w-50 hover:bg-[#FFFFFF] hover:shadow-lg p-5 rounded mx-auto">
            <div className="mx-auto w-20 rounded-full  ">
              <img src={tourGuide} alt="" />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold my-2">Guided Tours</h3>
              <p className="">
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
          <div className="w-50 hover:bg-[#FFFFFF] hover:shadow-lg p-5 rounded mx-auto">
            <div className="mx-auto w-20 rounded-full  ">
              <img src={hands} alt="" />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold my-2">Religious Tours</h3>
              <p className="">
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
          <div className="w-50 hover:bg-[#FFFFFF] hover:shadow-lg p-5 rounded mx-auto">
            <div className="mx-auto w-20 rounded-full  ">
              <img src={travelling} alt="" />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold my-2">Best Flights Options</h3>
              <p className="">
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
          <div className="w-50 hover:bg-[#FFFFFF] hover:shadow-lg p-5 rounded mx-auto">
            <div className="mx-auto w-20 rounded-full  ">
              <img src={medical} alt="" />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-semibold my-2">Medical insurance</h3>
              <p className="">
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Category;
