import NavigationLinks from "../components/header-components/NavigationLinks.jsx";
import { useCallback, useEffect, useRef } from "react";
import Hamburger from "../components/header-components/Hamburger.jsx";
import { useNavContext } from "../context/HeaderContext.jsx";
import { useWindowSize } from "../hooks/useWindowSize.js";
import HeaderLogo from "../components/atoms/svg-components/HeaderLogo.jsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const scrollIndicatorRef = useRef(null);
  const {
    isMenuOpen,
    setIsMenuOpen,
    scroll,
    setScroll,
    handleMenuItemLinkClick,
    handleNavActiveLink,
  } = useNavContext();

  const windowSize = useWindowSize();

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;
    const percentageScroll = (scrollTop / maxHeight) * 100;

    setScroll(Math.round(percentageScroll));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavActiveLink);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleNavActiveLink);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize]);

  // GSAP - Animate Scroll Indicator
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isAnyScreen: "(min-width: 0px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          let { reduceMotion } = context.conditions;

          if (!reduceMotion) {
            gsap.to(scrollIndicatorRef.current, {
              duration: 0.1,
              ease: "none",
              width: scroll + "%",
            });
          }
        },
      );
    },
    { scope: scrollIndicatorRef, dependencies: [scroll] },
  );

  return (
    <header className="fixed z-10 top-0 left-0 right-0 bg-background-theme">
      {/* Scroll Indicator */}
      {!isMenuOpen && (
        <div
          ref={scrollIndicatorRef}
          className={`indicator absolute bottom-0 translate-y-full h-[6px] bg-black-theme ${scroll !== 100 ? "rounded-full" : ""}`}
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
          <div className="w-44 lg:w-60">
            <HeaderLogo />
          </div>
        </a>
        {windowSize.width <= 768 ? (
          <>
            {/* Hamburger */}
            <Hamburger />

            {/* Overlay */}
            <div
              className={`fixed inset-0 transition-colors duration-300 -z-10 ${isMenuOpen ? "visible bg-black/20" : "invisible"} motion-reduce:transition-none`}
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
