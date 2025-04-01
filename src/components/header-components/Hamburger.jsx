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
          <g id="hamburger">
            <g>
              {/* First Line */}
              <rect
                id="first_line"
                className="transition-transform ease-in-out duration-500 motion-reduce:transition-none"
                style={{
                  WebkitTransform: isMenuOpen
                    ? "rotate(45deg) translate(0, 125px)"
                    : "rotate(0deg) translate(0, 0)",
                  MozTransform: isMenuOpen
                    ? "rotate(45deg) translate(0, 125px)"
                    : "rotate(0deg) translate(0, 0)",
                  OTransform: isMenuOpen
                    ? "rotate(45deg) translate(0, 125px)"
                    : "rotate(0deg) translate(0, 0)",
                  WebkitTransformOrigin: "center",
                  MozTransformOrigin: "center",
                  OTransformOrigin: "center",
                  willChange: "transform",
                }}
                y="0"
                width="512"
                height="50"
                rx="25"
                ry="25"
              />

              {/* Second Line */}
              <rect
                id="second_line"
                className="transition ease-in-out duration-500 motion-reduce:transition-none"
                style={{
                  WebkitTransform: isMenuOpen ? "scale(0.1)" : "scale(1)",
                  MozTransform: isMenuOpen ? "scale(0.1)" : "scale(1)",
                  OTransform: isMenuOpen ? "scale(0.1)" : "scale(1)",
                  WebkitTransformOrigin: "center",
                  MozTransformOrigin: "center",
                  OTransformOrigin: "center",
                  willChange: "opacity, transform",
                }}
                y="125"
                width="512"
                height="50"
                rx="25"
                ry="25"
              />

              {/* Third Line */}
              <rect
                id="third_line"
                className="transition-transform ease-in-out duration-500 motion-reduce:transition-none"
                style={{
                  WebkitTransform: isMenuOpen
                    ? "rotate(-45deg) translate(0, -125px)"
                    : "rotate(0deg) translate(0, 0)",
                  MozTransform: isMenuOpen
                    ? "rotate(-45deg) translate(0, -125px)"
                    : "rotate(0deg) translate(0, 0)",
                  OTransform: isMenuOpen
                    ? "rotate(-45deg) translate(0, -125px)"
                    : "rotate(0deg) translate(0, 0)",
                  WebkitTransformOrigin: "center",
                  MozTransformOrigin: "center",
                  OTransformOrigin: "center",
                  willChange: "transform",
                }}
                y="250"
                width="512"
                height="50"
                rx="25"
                ry="25"
              />
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
