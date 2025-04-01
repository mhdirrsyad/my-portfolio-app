import { createContext, useContext, useState } from "react";
import { navLinkContent } from "../data/navLinkContent.js";

const HeaderContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeItemLink, setActiveItemLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemLinkClick = (name) => {
    setActiveItemLink(name);
    setIsMenuOpen(false);
  };

  const handleNavActiveLink = () => {
    const sections = navLinkContent.map((navLinkItem) =>
      document.querySelector(navLinkItem.path),
    );

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = "";

    sections.forEach((section) => {
      if (
        section.offsetTop < scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveItemLink(
      navLinkContent.find(
        (navLinkItem) => navLinkItem.path === `#${currentSection}`,
      )?.name,
    );
  };

  return (
    <HeaderContext.Provider
      value={{
        activeItemLink,
        isMenuOpen,
        setIsMenuOpen,
        scroll,
        setScroll,
        handleMenuOpen,
        handleMenuItemLinkClick,
        handleNavActiveLink,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(HeaderContext);
};
