import { NavProvider } from "../../context/HeaderContext.jsx";
import Header from "../../sections/Header.jsx";
import Footer from "../../sections/Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <NavProvider>
        <Header />
      </NavProvider>

      {/* Main */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
