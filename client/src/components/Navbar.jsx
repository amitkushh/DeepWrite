import { Link, useNavigate } from "react-router-dom";
import RightArrowIcon from "../icons/RightArrowIcon";

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-white flex justify-between items-center py-5 px-32 border-b border-[#bdbdbd]">
        {/* Logo  */}

        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <img src="./favicon.ico" alt="deepwrite" className="h-10 w-10" />
          <span className="text-xl font-semibold">DeepWrite</span>
        </div>

        {/* Button */}
        <div>
          <button
            onClick={() => navigate("/admin")}
            className="bg-black text-white py-3 px-10 cursor-pointer flex justify-center items-center gap-1"
          >
            Admin Login
            <RightArrowIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
