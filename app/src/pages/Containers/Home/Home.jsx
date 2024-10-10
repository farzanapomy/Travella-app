import BrowseHotel from '../../Components/BrowseHotel/BrowseHotel';
import Featured from '../../Components/Featured/Featured';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/Navbar/HeroSection/HeroSection';
import Navbar from '../../Components/Navbar/Navbar';
import Recommended from '../../Components/Recommended/Recommended';
import Search from '../../Components/Search/Search';
import Subscribe from '../../Components/Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <div className="bg-[url('./assets/bg-hero.jpg')] h-[650px] object-fill   bg-center bg-no-repeat opacity-90 bg-blend-multiply w-full">
        <div className="max-w-[1224px] mx-auto relative">
          <Navbar />
          <HeroSection />
          <Search />
        </div>
      </div>
      <Featured />
      <BrowseHotel />
      <Recommended />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
