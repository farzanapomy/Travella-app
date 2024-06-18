import BrowseHotel from '../../Components/BrowseHotel/BrowseHotel';
import Featured from '../../Components/Featured/Featured';
import LayOut from '../../Components/LayOut/LayOut';
import HeroSection from '../../Components/Navbar/HeroSection/HeroSection';
import Navbar from '../../Components/Navbar/Navbar';
import Recommended from '../../Components/Recommended/Recommended';
import Search from '../../Components/Search/Search';

const Home = () => {
  return (
    <div>
      <div
        className="bg-[url('./assets/bg-hero.jpg')] h-[650px] object-fill   bg-auto bg-center bg-no-repeat opacity-90 bg-blend-multiply	 "
        style={{ objectFit: 'cover' }}
      >
        <div className="max-w-[1224px] mx-auto relative">
          <Navbar />
          <HeroSection />
          <Search />
        </div>
      </div>
      <LayOut>
        <Featured />
        <BrowseHotel />
        <Recommended/>
      </LayOut>
    </div>
  );
};

export default Home;
