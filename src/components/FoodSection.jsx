import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import AddItem from "./AddItem";
const FoodSection = () => {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(0);
  const windowWidth = window.innerWidth;
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    fetch(
      "//www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.Items))
      .catch((err) => console.error(err));
  }, []);
  const handleNext = () => {
    if (currentSlide < lastSlide) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    sliderRef.current.swiper.slideTo(currentSlide, 1000, false);
  }, [currentSlide]);
  useEffect(() => {
    if (windowWidth > 0 && windowWidth < 640) {
      setLastSlide(items.length - 2);
    } else if (windowWidth >= 640 && windowWidth < 768) {
      setLastSlide(items.length - 3);
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      setLastSlide(items.length - 4);
    } else if (windowWidth >= 1024) {
      setLastSlide(items.length - 5);
    }
  }, [windowWidth, items.length]);
  return (
    <div className="px-5 md:px-10 mt-14 md:mt-20 lg:mt-24 mb-20">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold mb-3">Popular</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:block text-[#FD6011]"
          >
            AddMore
          </button>
          {currentSlide === lastSlide && (
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[#FD6011]"
            >
              AddMore
            </button>
          )}
          <div className="text-2xl pr-5 lg:pr-0">
            <button
              onClick={handlePrevious}
              className={`${
                currentSlide === 0 ? "opacity-0 lg:opacity-15" : "opacity-100"
              }`}
              disabled={currentSlide === 0}
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className={`${
                currentSlide === lastSlide
                  ? "opacity-0 lg:opacity-15"
                  : "opacity-100"
              }`}
              disabled={currentSlide === lastSlide}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
        slidesPerView={2.7}
        spaceBetween={15}
        modules={[Navigation]}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.Id}>
            <Card item={item}></Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <AddItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
      ></AddItem>
    </div>
  );
};

export default FoodSection;
