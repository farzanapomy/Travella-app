import LayOut from '../../Components/LayOut/LayOut';
import HeroSection from '../../Components/Navbar/HeroSection/HeroSection';
import Navbar from '../../Components/Navbar/Navbar';
import Hotels from '../Hotels/Hotels';

const Home = () => {
  return (
    <div>
      <div className="bg-[url('./assets/bg-hero.jpg')] h-[650px] object-fill  bg-cover bg-center bg-no-repeat opacity-90 bg-blend-multiply	object-left-bottom	 ">
        <div className='max-w-[1224px] mx-auto'>
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <LayOut>
        <Hotels />
      </LayOut>
    </div>
  );
};

export default Home;
