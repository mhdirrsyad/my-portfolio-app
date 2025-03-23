import Button from "../components/atoms/button-components/Button.jsx";
import AboutImage from "../components/about-components/AboutImage.jsx";

const About = () => {
  return (
    <section id="about" className="bg-background-theme">
      <div className="max-w-screen mx-auto w-full px-4 md:px-6 lg:px-8 py-[72px] lg:py-36 xl:py-40 grid lg:grid-cols-2 gap-12 lg:gap-0">
        {/* About Copy */}
        <div className="max-w-full lg:place-content-end">
          <div className="flex flex-col gap-7 xl:gap-14">
            <div className="flex flex-col gap-4">
              <h5 className="font-fira text-h5 leading-h5 font-semibold text-black-theme">
                Hi, my name is <span className="text-blue-theme">Irsyad</span>{" "}
                👋🏻
              </h5>
              <h1 className="font-fira text-h1 font-bold leading-h1 text-black-theme">
                Frontend Developer & UI Designer.
              </h1>
              <p className="font-fira-sans text-black-theme text-p leading-p">
                I'm a Frontend Developer & UI Designer passionate about crafting
                intuitive and visually appealing digital experiences.
              </p>
            </div>

            <Button
              text="View my work"
              size="large"
              ariaLabel="View my work button"
              href="#my_project"
            />
          </div>
        </div>

        {/* About Image */}
        <div className="order-first place-items-center lg:order-last lg:max-w-full lg:place-items-end xl:place-content-end">
          <AboutImage />
        </div>
      </div>
    </section>
  );
};

export default About;
