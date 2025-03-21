const Button = ({ text, size, ariaLabel }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`${size === "large" ? "rounded-[12px]  w-max" : size === "small" ? "rounded-[8px] w-full sm:w-max" : ""} bg-black-theme`}
    >
      <span
        className={`${size === "large" ? "button-lg" : size === "small" ? "button-sm" : ""} font-fira-sans font-semibold`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
