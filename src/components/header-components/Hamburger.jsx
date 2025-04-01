import NavigationLinks from "./NavigationLinks.jsx";
import { useNavContext } from "../../context/HeaderContext.jsx";

const Hamburger = () => {
  const { handleMenuOpen, isMenuOpen } = useNavContext();

  return (
    <>
      <button
        onClick={handleMenuOpen}
        className="cursor-pointer place-content-center w-max ml-auto"
        aria-label="Toggle Navigation Menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          id="hamburger_icon"
          data-name="hamburger-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 300"
          className="text-black-theme size-8"
          aria-hidden="true"
          focusable="false"
        >
          <g id="Hamburger">
            <g>
              <g id="first_line">
                <rect
                  className={`${isMenuOpen ? "rotate-45 origin-center translate-y-[125px] -translate-x-[125px]" : "rotate-0 origin-center translate-y-0 -translate-x-0"} transition-transform duration-500`}
                  y="0"
                  width="512"
                  height="50"
                  rx="25"
                  ry="25"
                />
              </g>
              <g id="second_line">
                <rect
                  className={`${isMenuOpen ? "opacity-0 origin-center scale-0" : "opacity-100 origin-center scale-100"} transition duration-500`}
                  y="125"
                  width="512"
                  height="50"
                  rx="25"
                  ry="25"
                />
              </g>
              <g id="third_line">
                <rect
                  className={`${isMenuOpen ? "-rotate-45 origin-center -translate-y-[62.5px] -translate-x-[125px]" : "-rotate-0 origin-center -translate-y-0 -translate-x-0"} transition-transform duration-500`}
                  y="250"
                  width="512"
                  height="50"
                  rx="25"
                  ry="25"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>

      {/* Navigation Links Mobile */}
      <div
        className={`grid col-span-2 place-content-stretch transition-[grid-template-rows, margin-top] duration-300 ease-in-out ${
          isMenuOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="overflow-y-hidden">
          <NavigationLinks />
        </div>
      </div>
    </>
  );
};

export default Hamburger;
