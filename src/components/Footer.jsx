import { FaArrowRightLong } from "react-icons/fa6";
import image from "../assets/Image2.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-[#F99F1C]">
      <div className="max-w-screen-2xl mx-auto flex items-center gap-10 md:pl-10 lg:pl-20 pb-10 px-5">
        <div className="w-full lg:w-3/4 pt-10">
          <form className="relative flex items-center w-full lg:w-3/4">
            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-5 ml-5 text-sm text-gray-900 rounded-2xl bg-gray-50 placeholder:text-lg"
              placeholder="Enter Your Email"
              required
            />
            <button
              type="submit"
              className="text-[#FC6011] lg:text-white text-lg flex items-center gap-3 absolute right-4  bg-transparent lg:bg-[#FC6011] lg:hover:bg-orange-600 focus:outline-none font-medium rounded-2xl pl-10 pr-5 py-3 "
            >
              Subscribe <FaArrowRightLong></FaArrowRightLong>
            </button>
          </form>
          <div className="p-4 mt-10 md:mt-20">
            <h3 className="hidden lg:block text-2xl font-bold">
              pti<span className="font-bold text-3xl text-[#FC6011]">.</span>
            </h3>
            <div className="flex flex-col space-y-10 justify-center items-center lg:flex-row-reverse lg:items-center lg:justify-between">
              <div className="flex gap-5 lg:pr-20 text-white lg:text-[#FC6011] text-2xl">
                <div className="p-3 bg-[#FC6011] lg:bg-[#FEDDBA] rounded-full">
                  <AiOutlineGoogle />
                </div>
                <div className="p-3 bg-[#FC6011] lg:bg-[#FEDDBA] rounded-full">
                  <FaTwitter />
                </div>
                <div className="p-3 bg-[#FC6011] lg:bg-[#FEDDBA] rounded-full">
                  <CiInstagram />
                </div>
              </div>
              <h3 className="lg:hidden text-2xl font-bold">
                pti<span className="font-bold text-3xl text-[#FC6011]">.</span>
              </h3>
              <p className="font-semibold">
                Copyright&copy;Tripp.All Right Reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1 pr-10">
          <img src={image} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
