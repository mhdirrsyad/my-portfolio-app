import rightIcon from "/icons/right_icon.svg";
import leftIcon from "/icons/left_icon.svg";

const NavigationButton = ({ type, swiperRef }) => {
  return (
    <button
      className="bg-black-theme rounded-full z-2"
      onClick={() =>
        type === "next"
          ? swiperRef.current?.slidePrev()
          : swiperRef.current?.slideNext()
      }
    >
      <span className="button-slider">
        <img
          src={type !== "next" ? rightIcon : leftIcon}
          alt={type !== "next" ? "Right icon" : "Left icon"}
          className="w-4 h-9 xl:w-6 xl:h-11"
        />
      </span>
    </button>
  );
};

export default NavigationButton;
