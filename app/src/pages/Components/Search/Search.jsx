const Search = () => {
  return (
    <div className="w-fit mx-auto bg-[#494545da] p-6 rounded-md">
      <h1 className="mb-3 font-semibold text-white">Book your vacation </h1>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center border border-[#979797] rounded-l p-2 gap-2 w-full">
          <div> Bed </div>
          <div>
            <p className="text-sm">Accommodation</p>
            <input
              type="text"
              placeholder="6730 Luna Land North Rhiannonmouth"
            />{' '}
          </div>
        </div>
        <div className="w-fit flex justify-between items-center border border-[#979797] p-2 gap-2">
          <div> calendar </div>
          <div>
            <p className="text-sm">Check-in</p>
            <input
              type="text"
              placeholder="19.06.2019"
              className="border-0 outline-none bg-[#979797] placeholder-white px-1"
            />{' '}
          </div>
        </div>
        <div className="flex justify-between items-center border border-[#979797] p-2 gap-2">
          <div>
            <p className="text-sm">Check-out</p>
            <input type="text" placeholder="19.06.2019" />{' '}
          </div>
        </div>
        <div className="flex justify-between items-center border border-[#979797] rounded-r p-2 gap-2">
          <div> avatar</div>
          <div>
            <p className="text-sm">Guests</p>
            <input type="text" placeholder="4 adults" />{' '}
          </div>
        </div>
        <div>
          <button className="bg-[#91CB82] py-2.5 px-9 rounded-md mx-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
