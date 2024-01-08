import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const navMenus = [
  { path: "/", label: "Home" },
  { path: "/details", label: "Details" },
  { path: "/category", label: "Category" },
  { path: "/favorites", label: "My Favorites" },
  { path: "/profile", label: "Profile" },
  { path: "/login", label: "Log In/Sign Up" },
];

const Navbar = () => {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");
  return (
    <div className="flex items-center justify-between gap-2 md:gap-5 py-5 px-5 md:px-10 border-b-[2px] md:border-none">
      <div>
        <h3 className="font-semibold text-xl ">pti.</h3>
      </div>
      <div className="flex items-center gap-2 md:gap-5 ">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 md:pl-3 flex items-center pointer-events-none opacity-80 text-[#FD6011] text-lg">
            <BiSearch />
          </div>

          <form action="#">
            <input
              type="search"
              name="search"
              placeholder="Search Audiobook"
              className="p-2 pl-8 md:pl-10 md:pr-40 lg:pr-72 text-gray-600 rounded w-full border-white"
            />
          </form>
        </div>

        <div className="relative bg-white p-2 md:p-3 rounded-md flex items-center justify-between w-32 md:w-48">
          <p className="uppercase font-medium">Menu</p>
          <button
            onClick={() => setIsToggleMenu(!isToggleMenu)}
            className="text-[#FD6011]  text-lg"
          >
            {isToggleMenu ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
          <div
            className={`${
              isToggleMenu ? "block" : "hidden"
            } z-10 absolute top-12 md:top-14 left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-auto md:w-48`}
          >
            <ul className="py-2 text-sm text-gray-700 font-medium">
              {navMenus.map((item) => (
                <li key={item.label}>
                  <a
                    className={`block px-4 py-1 hover:bg-[#E7E9EC] hover:text-[#FD6011]  ${
                      item.path === activeMenu
                        ? "bg-[#E7E9EC] text-[#FD6011]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block p-3 bg-[#FD6011] text-white text-2xl rounded-full">
        <BiUser />
      </div>
    </div>
  );
};

export default Navbar;
