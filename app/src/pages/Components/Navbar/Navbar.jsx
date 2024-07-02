import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
const Navbar = () => {
  console.log(window.location.href);
  return (
    <div
      className={`w-full ${
        window.location.pathname === '/' ? 'bg-none' : 'bg-[#BCD7D3]'
      } border-opacity-40 mx-auto`}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <div className="mx-4 mt-10 mb-6">
            <button className="mr-4">About</button>
            <button>Contact</button>
          </div>
          <Link to="/">
            <Logo />
          </Link>
          <div className="mx-4 mt-10 mb-6">
            <button className="mr-4">Register</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
