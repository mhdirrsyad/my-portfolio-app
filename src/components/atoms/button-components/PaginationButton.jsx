import React from "react";

const PaginationButton = ({
  index,
  slidesPerGroup,
  swiperRef,
  activeIndex,
}) => {
  return (
    <button
      key={index}
      onClick={() => swiperRef.current.slideToLoop(index * slidesPerGroup)}
      className="bg-black-theme rounded-md"
    >
      <span
        className={`w-9 h-9 flex justify-center items-center cursor-pointer ${activeIndex === index ? "bg-blue-theme border-black-theme text-white" : "bg-gray-theme border-inactive-theme text-inactive-theme"}  border-1 text-links leading-links -translate-[2px] rounded-md hover:translate-0 transition duration-300 font-semibold`}
      >
        {index + 1}
      </span>
    </button>
  );
};

export default PaginationButton;
