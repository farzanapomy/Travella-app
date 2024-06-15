/* eslint-disable react/prop-types */
const LayOut = ({ children }) => {
  return (
    <div className="p-2 max-w-[1240px] mx-auto overflow-hidden mt-20 flex flex-col justify-center items-center gap-20">
      {children}
    </div>
  );
};

export default LayOut;
