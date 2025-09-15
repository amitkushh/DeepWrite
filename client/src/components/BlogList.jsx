import { useState } from "react";
import categories from "../constants/Category";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div className="bg-white py-16 border-y border-[#bdbdbd]">
      {/* Categories Section */}
      <div className="flex justify-center gap-4 relative">
        {categories.map((item) => (
          <div key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`py-3 px-6 hover:bg-[#cccbcb] cursor-pointer transition-colors duration-100 ease-in-out ${
                menu === item && "bg-[#cccbcb]"
              }`}
            >
              {item.text}
              {menu === item && (
                <div className="absolute left-0 right-0 top-0 -z-1"></div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <div></div>
    </div>
  );
}

export default BlogList;
