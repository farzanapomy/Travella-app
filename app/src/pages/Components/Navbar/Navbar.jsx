import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1024px] border-b border-[#E7E7F2] border-opacity-40  mx-auto">
      <div className="">
        <div className="flex justify-between items-center">
          <div className="mx-4 mt-10 mb-6">
            <span>About</span>
            <span>Contact</span>
          </div>
          <Logo/>
          <div className="mx-4 mt-10 mb-6">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
