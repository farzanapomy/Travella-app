/* eslint-disable react/prop-types */
const LayOut = ({ children }) => {
  return (
    <div className="p-2 max-w-[1240px] mx-auto overflow-hidden">
      {' '}
      {children}
    </div>
  );
};

export default LayOut;
