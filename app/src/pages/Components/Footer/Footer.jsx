import LayOut from '../LayOut/LayOut';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className="w-full mx-auto bg-[#BBC9B8]  px-5 py-8 h-full">
      <LayOut>
         
        <Logo className="cursor-pointer" />
        <div className="w-full mx-auto flex justify-between items-center ">
          <div>
            <ul className='space-y-3'>
              <li className=""></li>
              <li className="cursor-pointer font-semibold">Countries</li>
              <li className="cursor-pointer">Regions</li>
              <li className="cursor-pointer">Cities</li>
              <li className="cursor-pointer">Hotels</li>
              <li className="cursor-pointer">Airports</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-3'>
              <li></li>
              <li className="cursor-pointer font-semibold">Countries</li>
              <li className="cursor-pointer">Regions</li>
              <li className="cursor-pointer">Cities</li>
              <li className="cursor-pointer">Hotels</li>
              <li className="cursor-pointer">Airports</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-3'>
              <li></li>
              <li className="cursor-pointer font-semibold">Company</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Popular Service</li>
              <li className="cursor-pointer">Service</li>
              <li className="cursor-pointer">Airports</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-3'>
              <li></li>
              <li className="cursor-pointer font-semibold">Support</li>
              <li className="cursor-pointer">FAQ</li>
              <li className="cursor-pointer">Help Center</li>
              <li className="cursor-pointer">Career</li>
              <li className="cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div>
            <ul className='space-y-3'>
              <li></li>
              <li className="font-semibold">Contact Info</li>
              <li>+0913-705-3875</li>
              <li>elizabethJ@jourrapide.com</li>
              <li>4808 Skinner Hollow Road Days Creek, OR 97429</li>
              <li>YK</li>
            </ul>
          </div>
        </div>
      <p>Company All Right Reserved , 2024</p>
      </LayOut>
    </div>
  );
};

export default Footer;
