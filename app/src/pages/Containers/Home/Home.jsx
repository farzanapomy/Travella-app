import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-[url('./assets/hero-bg.jpg')] h-[650px] object-contain  bg-cover bg-center bg-no-repeat opacity-90">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
