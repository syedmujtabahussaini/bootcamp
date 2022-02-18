import LeftComponent from "./Leftcomponent";
import LeftPanelButtons from "./LeftPanelButtons";
import Post from "./Post";
function App() {
  return (
    <div class="grid grid-cols-4 gap-0 relative">
      <div class="bg-[#084fe5] flex-col col-span-1 relative">
        <div className="relative">
          <span className="flex justify-center py-3 ">
            <img className="" src="./logo.png" alt="" width={80} />
          </span>
          <span className="flex justify-center h-60 ">
            <h3 className="text-white font-bold ">my2Cents</h3>
          </span>
        </div>
        <LeftComponent />
        <div className=" border-2  border-bg-blue-500 flex justify-center bg-white  pt-20  ">
          <LeftPanelButtons />
        </div>

        <div className="    bg-white pb-10 ">
          <img src="./dark.png" alt="" className=" w-[60%]  pb-3 mx-auto" />
          <img
            src="./doctor.png"
            alt=""
            className="shadow-2xl w-[80%] rounded-t-xl rounded-b-xl mx-auto"
          />
        </div>

        <div className=" shadow-2xl flex justify-center  bg-white  py-5">
          <img
            src="./pepsi.png"
            alt=""
            className=" shadow-2xl w-[80%] rounded-t-xl rounded-b-xl"
          />
        </div>
      </div>
      <div className="bg-white-100 col-span-2">
        <div className=" flex bg-white h-20 border-2 border-black-200 align-middle pl-5 ">
          <input
            placeholder="search topic, book,videos,idea,talent,podcast"
            className="border-2 border-black-500 rounded-r-2xl  rounded-l-2xl my-auto w-[120%] align-middle  text-sm h-10 text-clip"
          />
        </div>
        <img
          src="travellogo.png"
          alt=""
          className="w-[95%] mx-auto pt-5  rounded-b-xl rounded-t-xl"
        />
        {/* CRYPTO WINNER  ====================================*/}
        <div className=" bg-[#084fe5] rounded-b-xl rounded-t-xl w-[95%] mx-auto h-[5%] pt-5 mt-5 text-white pl-10 pr-5 ">
          <div className="flex justify-between">
            <div className=" text-xl ">
              <img src="folder.svg" width={25} className="inline " />
              <span className="ml-3">Crypto Winter's</span>
            </div>
            <div>
              <img src="ellipsis-h.svg" width={30} />
            </div>
          </div>

          <div className="text-sm pt-3  ">
            #Bitcoin{" "}
            <span className="bg-[#f5f8ff] text-gray-500 text-xs rounded-r-lg rounded-l-lg pl-1 pr-1">
              1253Posts
            </span>
          </div>
        </div>

        {/* ========================================================== */}

        <div className=" drop-shadow-lg	 flex justify-between bg-[#f5f8ff] rounded-b-xl rounded-t-xl w-[95%] mx-auto   mt-5 h-20">
          <div className="my-auto   text-3xl font-bold text-gray-400 xy-auto">
            <span className="ml-4">Posts</span>
          </div>

          <div className="mr-4 self-center h bg-[#084fe5] text-gray-200 font-lightbold text-lg w-40 h-8 rounded-l-md rounded-r-md">
            <span className=" pl-2">
              Latest
              <img
                src="arrow-circle-down.svg"
                className="w-7  inline ml-16 "
                pb-5
              />
            </span>
          </div>
        </div>

        <Post />
        <Post />
        <Post />
        <div className="flex justify-center pt-5 pb-5 text-blue-900 font-bold">
          1 &emsp;2&emsp; 3&emsp; <span className="bg-blue-200">4</span>&emsp;
          5&emsp; ...&emsp; 22
        </div>

        <div className="  w-[90%] bg-blue-700 flex justify-center mx-auto  rounded-t-2xl rounded-b-2xl h-[120px]">
          <span className="  self-center h-11 w-[90%]">
            <input
              placeholder="Monitize a topic"
              className="rounded-t-2xl rounded-b-2xl  h-11 w-[100%] text-center text-lg font-bold text-blue-800 placeholder-blue-700"
            />
          </span>
        </div>

        <div className=" drop-shadow-lg	 flex justify-between bg-[#f5f8ff] rounded-b-xl rounded-t-xl w-[95%] mx-auto   mt-5 h-20">
          <div className="my-auto   text-3xl font-semibold	 text-blue-500 xy-auto">
            <span className="ml-4">Create a post</span>
          </div>
        </div>

        <div className=" drop-shadow-sm  flex justify-between bg-[#f5f8ff] rounded-b-xl rounded-t-xl w-[95%] mx-auto   mt-5 h-[120px]">
          <div className="my-auto text-lg  font-semibold	 text-blue-500  pl-5 pr-5 pb-5 pt-5 ">
            <div className="  h-8 bg-blue-700 w-[95%s] rounded-t-3xl mb-13 p-5 ml-10">
              <span className="block mt-5  p-5 w-[95%]  ">
                Bring your content from other plateforms to my2cents, and
                increase your userScore immediately to receive more share from
                ad revenue , and compete for bonuses.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-green-100 col-span-1 ">
        3rd col 1st col Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Molestiae optio ab aut deserunt eos earum maiores rerum harum eum
        modi, saepe cum corrupti accusamus voluptas, minima incidunt pariatur
        temporibus numquam ut atque. Libero laudantium asperiores exercitationem
        qui ad, in, ducimus numquam ullam illo illum minus labore quasi ut sit
        alias?
      </div>
    </div>
  );
}
export default App;
