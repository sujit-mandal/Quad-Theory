import image from "../assets/Image1.png";

const Banner = () => {
  return (
    <div className="mt-14 md:mt-20 lg:mt-28 flex flex-col md:flex-row items-center justify-between gap-5 bg-transparent md:bg-[#F99F1C] rounded-3xl md:mx-10 md:px-10 lg:px-20">
      <div className="pl-0 md:pl-10 lg:pl-16 md:w-4/6 text-center md:text-left">
        <h2 className="md:text-white text-3xl md:text-4xl lg:text-5xl font-semibold opacity-80 mb-5">
          Deliver Food To Your Door Step.
        </h2>
        <p className="text-[#828E99] md:text-gray-200 md:text-lg lg:text-xl">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <div className="relative z-0">
        <div className="bg-[#FD9460] rounded-3xl h-[70%] w-[90%] absolute top-[30%] left-[5%] md:hidden -z-10"></div>
        <img src={image} alt="" className="mb-1 md:-mb-2 z-10" />
      </div>
    </div>
  );
};

export default Banner;
