function Hero() {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="flex flex-col justify-center items-center">
        <span className="text-2xl text-center">
          Stories. Ideas. Inspiration.
        </span>
        <h1 className="text-7xl font-bold max-w-[900px] text-center leading-20">
          Read Blogs on Anything & Everything
        </h1>
        <p className="text-lg max-w-[700px] text-center mt-8 mb-12">
          From technology to lifestyle, travel to productivity, and everything
          in between – explore a wide variety of blogs written to inform,
          inspire, and entertain you.
        </p>
      </div>

      {/* Seach Section */}
      <div>
        <form
          action=""
          className="flex justify-center items-center max-w-lg mx-auto"
        >
          <input
            type="search"
            placeholder="Search"
            className="border-2 pl-4 outline-none py-3 w-full"
            required
          />
          <button className="bg-black text-white py-3 px-8 cursor-pointer border-2">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
