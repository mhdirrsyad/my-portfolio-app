import About from "./sections/About.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";
import Services from "./sections/Services.jsx";
import MyProject from "./sections/MyProject.jsx";
import GetInTouch from "./sections/GetInTouch.jsx";

const App = () => {
  return (
    <MainLayout>
      {/* Section 1 - About */}
      <About />

      {/* Section 2 - Services */}
      <Services />

      {/* Section 3 - My Project */}
      <MyProject />

      {/* Section 4 - Get In Touch */}
      <GetInTouch />
    </MainLayout>
  );
};

export default App;
