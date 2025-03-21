import NavigationLinks from "../components/header-components/NavigationLinks.jsx";
import { getWindowDimensions } from "../utils/getWindowDimensions.js";
import { useCallback, useEffect } from "react";
import Hamburger from "../components/header-components/Hamburger.jsx";
import { useNavContext } from "../context/NavContext.jsx";

const Header = () => {
  const {
    windowSize,
    setWindowSize,
    isMenuOpen,
    setIsMenuOpen,
    scroll,
    setScroll,
    handleMenuItemLinkClick,
    handleNavActiveLink,
  } = useNavContext();

  const handleWindowResize = useCallback(() => {
    setWindowSize(getWindowDimensions());
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;
    const percentageScroll = (scrollTop / maxHeight) * 100;

    setScroll(Math.round(percentageScroll));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavActiveLink);
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleNavActiveLink);
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize]);

  return (
    <header className="fixed z-10 top-0 left-0 right-0 bg-background-theme">
      {/* Scroll Indicator */}
      {!isMenuOpen && (
        <div
          className="absolute bottom-0 translate-y-full h-[6px] bg-black-theme"
          style={{ width: `${scroll}%` }}
          aria-hidden="true"
        ></div>
      )}

      <nav
        aria-label="Navigation Bar"
        className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-6  grid grid-cols-[minmax(160px,1fr)_minmax(0,2fr)] md:grid-rows-1 bg-background-theme"
      >
        {/* Logo */}
        <a
          href="#about"
          onClick={() => handleMenuItemLinkClick("About")}
          className="cursor-pointer"
          aria-label="Go to Home"
        >
          <img
            src="/logos/header_logo.svg"
            alt="Header Logo"
            className="w-40 md:size-max"
          />
        </a>
        {windowSize.width <= 768 ? (
          <>
            {/* Hamburger */}
            <Hamburger />

            {/* Overlay */}
            <div
              className={`fixed inset-0 transition-colors duration-300 -z-10 ${isMenuOpen ? "visible bg-black/20" : "invisible"}`}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden={!isMenuOpen}
            ></div>
          </>
        ) : (
          <>
            {/* Navigation Links */}
            <NavigationLinks />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
