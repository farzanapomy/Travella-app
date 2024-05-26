import LayOut from '../../Components/LayOut/LayOut';
import HeroSection from '../../Components/Navbar/HeroSection/HeroSection';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import Hotels from '../Hotels/Hotels';

const Home = () => {
  return (
    <div>
      <div
        className="bg-[url('./assets/bg-hero.jpg')] h-[650px] object-fill   bg-auto bg-center bg-no-repeat opacity-90 bg-blend-multiply	 "
        style={{ objectFit: 'cover' }}
      >
        <div className="max-w-[1224px] mx-auto">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <LayOut>
          <Search />
        <Hotels />
      </LayOut>
    </div>
  );
};

export default Home;
