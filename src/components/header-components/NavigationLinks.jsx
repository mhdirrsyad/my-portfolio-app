import { navLinkContent } from "../../data/navLinkContent.js";
import { useNavContext } from "../../context/NavContext.jsx";

const NavigationLinks = () => {
  const { isMenuOpen, activeItemLink, handleMenuItemLinkClick } =
    useNavContext();

  return (
    <div className="place-content-center ml-auto">
      <ul className="flex flex-col md:flex-row md:gap-12 w-full">
        {navLinkContent.map((navLinkItem, index) => (
          <li key={index} className="group">
            <a
              onClick={() => handleMenuItemLinkClick(navLinkItem.name)}
              tabIndex={isMenuOpen ? 0 : -1}
              href={navLinkItem.path}
              className={`md:relative ${activeItemLink === navLinkItem.name ? "text-black-theme md:after:scale-x-100" : "text-inactive-theme"} md:after:absolute md:after:left-0 md:after:top-full md:after:w-full md:after:bg-black-theme md:after:h-[1.2px] md:after:origin-left md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform md:after:duration-300 md:after:rounded-full text-links leading-links font-semibold font-fira-sans group-hover:bg-hover-theme group-hover:rounded-md w-full md:w-max py-4 md:p-0 block h-full`}
            >
              {navLinkItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationLinks;
