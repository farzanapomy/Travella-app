import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { MdOutlineFlightTakeoff } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';

const Navbar = () => {
  console.log(window.location.href);
  return (
    <div className={`w-full border-opacity-40 mx-auto  `}>
      <div className="">
        <div className="flex justify-between items-center">
          <div className="mx-4 mt-10 mb-6">
            <button className="mr-4">
              <MdOutlineFlightTakeoff />
              Find Flight
            </button>
            <button>
              <IoBed />
              Find Stays
            </button>
          </div>
          <div className={``}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="mx-4 mt-10 mb-6">
            <Link to={'/register'}>
              <button className="mr-4">Register</button>{' '}
            </Link>
            <Link to={'/login'}>
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
