import footerLinks from "../constants/FooterLinks";

function Footer() {
  return (
    <footer>
      <div className="px-32 bg-white flex flex-col justify-center items-center border-t border-[#bdbdbd]">
        <div className="grid grid-cols-4 gap-12 py-16">
          <div>
            <div className="flex items-center gap-2 cursor-pointer mb-5">
              <img src="./favicon.ico" alt="deepwrite" className="h-10 w-10" />
              <span className="text-xl font-semibold">DeepWrite</span>
            </div>
            <span>
              From technology to lifestyle, travel to productivity, and
              everything in between – explore a wide variety of blogs written to
              inform, inspire, and entertain you.
            </span>
          </div>

          {footerLinks.map((links) => (
            <div key={links}>
              <h4 className="font-semibold text-lg mb-4">{links.title}</h4>
              <ul className="space-y-2">
                {links.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-gray-600 flex flex-col">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="py-6 border-t border-[#bdbdbd] text-center px-32 bg-white">
        <span>Copyright 2025 © DeepWrite - All Right Reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
