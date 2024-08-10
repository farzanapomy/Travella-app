const Logo = () => {
  return (
    <div>
      <h1
        className={` mt-10 mb-6 text-2xl font-Inter font-bold   drop-shadow-xl  ${
          window.location.pathname === '/' ? 'invert' : 'text-[#3A5357]'
        }`}
      >
        TrɅ<span className={`text-black`}>vel</span>lɅ Go
      </h1>
    </div>
  );
};

export default Logo;
