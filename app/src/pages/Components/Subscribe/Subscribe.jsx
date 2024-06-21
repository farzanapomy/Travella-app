const Subscribe = () => {
  return (
    <div className="bg-[#3A5357] w-full mx-auto flex justify-center items-center p-10 text-white rounded-md mt-10">
      <div className=" text-center">
        <h1 className="text-4xl font-bold mb-3">Get in Touch !</h1>
        <span>Sign Up for get more update and save your money and time</span>
        <div className="">
          <input
            type="text"
            placeholder="Your Email"
            className=" mr-4 my-8 w-4/6 p-2 rounded outline-none"
          />
          <button className="bg-[#91CB82] py-2.5 px-5  rounded-md ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
