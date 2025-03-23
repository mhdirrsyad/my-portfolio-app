const Button = ({ text, size, ariaLabel, href }) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`${size === "large" ? "rounded-[12px]  w-max" : size === "small" ? "rounded-[8px] w-full sm:w-max" : ""} bg-black-theme`}
    >
      <a
        href={href}
        className={`${size === "large" ? "button-lg" : size === "small" ? "button-sm" : ""} font-fira-sans font-semibold`}
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
