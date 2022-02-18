function LeftComponent() {
  return (
    <div className="  shadow-2xl  mx-2 rounded-xl top-[150px] bg-white h-[11%] w-[94%] absolute">
      <img
        src="blockchainlogo.jpg"
        alt="logo"
        className="rounded-t-xl  h-[50%] w-[100%]"
      />
      <span className="flex justify-center h-5">
        <img
          src="professor.jpg"
          alt="logo"
          className=" rounded-full h-10 w-10 relative bottom-5"
        />
      </span>
      <p className=" leading-4	 text-center font-extrabold	 text-blue-600">
        Professor
      </p>
      <p className="leading-4	 text-center text-sm text-blue-600">
        Istambul , Turkey
      </p>

      <div className=" leading-5 flex justify-around text-blue-500 text-xs border-t-2 pt-2 mt-2 w-[70%] mx-auto">
        <div>
          <span className="font-extrabold">5k</span> Posts
        </div>
        <div>
          <span className="font-extrabold">500</span> videos
        </div>
        <div>
          <span className="font-extrabold">40</span> Books
        </div>
      </div>

      <div className=" leading-6 flex justify-around text-blue-500 text-xs  pb-10  w-[90%] mx-auto">
        <div>
          <span className="font-extrabold">200K</span> Ideas
        </div>
        <div>
          <span className="font-extrabold">126</span> Introductions
        </div>
        <div>
          <span className="font-extrabold">652</span> Podcast Books
        </div>
      </div>
    </div>
  );
}
export default LeftComponent;
