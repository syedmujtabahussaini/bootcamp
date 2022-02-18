function LeftPanelButtons() {
  return (
    <div className=" w-[85%] mt-5">
      <button className=" shadow-sm hover:bg-[#084fe5] hover:text-white  flex justify-start  py-1  bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-11 text-black  my-3">
        <img
          src="Home.svg"
          alt=""
          width={20}
          className=" mx-4 my-auto inline "
        />
        <span className="  hover:text-white flex my-auto py-2  text-sm font-bold ">
          Home
        </span>
      </button>

      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img
          src="book.svg"
          alt=""
          width={20}
          className="mx-4 inline my-auto "
        />
        <span className="py-2 flex align-middle text-sm font-bold my-auto">
          myBook
        </span>
      </button>

      <button className=" hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="video.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myVid
        </span>
      </button>

      <button className=" hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="idea.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myIdea
        </span>
      </button>
      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="job.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myjob
        </span>
      </button>
      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="podcast.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myPodcast
        </span>
      </button>
      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="reuse.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myReuse
        </span>
      </button>
      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="food.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          mySlowfood
        </span>
      </button>
      <button className="  hover:bg-[#084fe5] hover:text-white py-1 flex justify-start bg-[#f5f8ff] w-full rounded-t-lg rounded-b-lg h-10 text-black  my-2">
        <img src="food.svg" alt="" width={20} className="mx-4 my-auto" />
        <span className="py-1 flex align-middle text-sm font-bold my-auto">
          myCM
        </span>
      </button>
    </div>
  );
}
export default LeftPanelButtons;
