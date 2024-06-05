import Navbar from '../../Components/Navbar/Navbar';
const Hotels = () => {
  return (
    <div>
      <div
        className="bg-[url('./assets/bg-hero.jpg')] h-fit object-fill  bg-no-repeat opacity-90 bg-blend-multiply	 "
        style={{ objectFit: 'cover' }}
      >
        <div className="max-w-[1224px] mx-auto ">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Hotels;
