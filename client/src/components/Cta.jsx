function Cta() {
  return (
    <div className="py-16 px-32">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-semibold">Stay Updated, Always!</h2>
        <p className="text-lg">Subscribe to receive the latest blogs, trending tech, and exclusive updates.</p>
      </div>
      <div className="mt-8">
        <form className="flex justify-center items-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email id"
            className="border-2 pl-4 outline-none py-3 w-full"
            required
          />
          <button className="bg-black text-white py-3 px-8 cursor-pointer border-2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cta;
