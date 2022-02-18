function Post() {
  return (
    <div className=" pt-5 mr-5  border-blue-100  border-b-2  border-l-2">
      <div className="flex w-[95%] mx-auto">
        <img src="professor.jpg" alt="" className="rounded-full h-7 w-7 mr-2" />
        <span className="text-blue-700 font-bold ">Craig Cooper</span>
        <span className=" text-blue-400 bg-[#f5f8ff] rounded-t-lg rounded-b-lg text-xs h-5 ml-[55%] drop-shadow-md p-1">
          Aug 17,2021 07:23am
        </span>
      </div>
      <div className="w-[95%] ml-11">
        <p className="text-sm text-blue-400 block mb-2">
          #The NFTS for a poem, an article, a short film, and novel
        </p>
      </div>

      <div className="w-[85%] mx-auto font-semibold text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit.
        Repellat molestiae minima optio fugit. Quaerat enim animi veniam eveniet
        Quibusdam, natus minus!Lorem ipsum,{" "}
        <span className="text-blue-800 font-semibold">
          dolor sit amet consectetur
        </span>
        adipisicing elit. Suscipit explicabo recusandae magni odio,
        necessitatibus harum ducimus commodi. Repellat molestiae minima optio
        fugit. Quaerat enim{" "}
        <span className="text-blue-800 font-semibold">
          animi veniam eveniet eius suscipit, eos aliquid
        </span>
        ducimus accusantium corporis modi quae at aut officia officiis natus
        odit, itaque unde tempore totam consectetur? Quibusdam, natus minus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        explicabo recusandae magni odio, necessitatibus harum ducimus commodi.
        <p className="mt-5">
          Repellat molestiae minima optio fugit. Quaerat enim animi veniam
          eveniet eius suscipit, eos aliquid ducimus{" "}
          <span className="text-blue-800 font-semibold">
            accusantium corporis modi
          </span>
          quae at aut officia officiis natus odit, itaque unde tempore totam
          consectetur? Quibusdam, natus minus!
        </p>
      </div>

      <div className="flex mx-auto  w-[85%]">
        <div className=" text-blue-800 text-sm pt-5 w-[60%] flex justify-evenly center pl-12 pb-5 pr-[20%]">
          <img src="eye.svg" alt="" className=" h-5 w-5 mr-1" />
          <span className="mr-3">12.5k</span>
          <img src="meh-closed-eye.svg" alt="" className=" h-5 w-5 mr-1" />
          <span className="mr-3">3.2k</span>
          <img src="smile-wink.svg" alt="" className=" h-5 w-5 mr-1" />
          <span className="mr-3">300</span>
          <img src="bookmark.svg" alt="" className=" h-5 w-5 mr-1" />
          <span className="mr-3">1.5k</span>
        </div>
        <div className=" my-auto flex ml-[25%]">
          <img
            src="location-arrow.svg"
            className=" h-6 w-6 mr-3 my-auto  inline"
          />
          <img src="ellipsis-h2.svg" width={30} />
        </div>
      </div>

      {/* <div className=" border-black border-4 text-blue-800 text-sm pt-5 w-[40%] flex justify-evenly center pl-12 pb-5 mr-2">
       <div> 
        <img src="eye.svg" alt="" className=" h-5 w-5 mr-1" />
        <span className="mr-3">12.5k</span>
        <img src="meh-closed-eye.svg" alt="" className=" h-5 w-5 mr-1" />
        <span className="mr-3">3.2k</span>
        <img src="smile-wink.svg" alt="" className=" h-5 w-5 mr-1" />
        <span className="mr-3">300</span>
        <img src="bookmark.svg" alt="" className=" h-5 w-5 mr-1" />
        <span className="mr-3">1.5k</span>
        </div>
      </div>
      
      <div className=" border-black border-2 text-blue-800 text-sm pt-5 w-[10%] flex  pl-12 pb-5 mr-7">
      
        <img src="location-arrow.svg" className=" h-5 w-5 mr-1  border-2 border-black"/>
      
      </div> */}
    </div>
  );
}

export default Post;
