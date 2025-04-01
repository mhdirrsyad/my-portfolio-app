import Button from "../components/atoms/button-components/Button.jsx";
import AboutSVG from "../components/atoms/svg-components/AboutSVG.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  // GSAP - Animate About Section
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)",
          isDesktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          let { isDesktop, isTablet, isMobile, reduceMotion } =
            context.conditions;

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play none",
            },
          });

          if (isDesktop && !reduceMotion) {
            tl.from(`#left-about`, { x: -100, opacity: 0, duration: 0.5 }).from(
              `#right-about`,
              { x: 100, opacity: 0, duration: 0.5 },
              "<",
            );
          } else if ((isTablet || isMobile) && !reduceMotion) {
            tl.from("#right-about", {
              y: "+=30",
              opacity: 0,
              duration: 0.3,
            }).from(
              "#left-about",
              {
                y: "+=30",
                opacity: 0,
                duration: 0.3,
              },
              ">",
            );
          }
        },
      );
    },
    { scope: aboutRef },
  );

  return (
    <section id="about" ref={aboutRef} className="bg-background-theme">
      <div className="max-w-screen overflow-hidden mx-auto w-full px-4 md:px-6 lg:px-8 pt-[90px] pb-8 lg:py-[180px] grid lg:grid-cols-2 gap-12 lg:gap-0">
        {/* About Copy */}
        <div id="left-about" className="max-w-full lg:place-content-end">
          <div className="flex flex-col gap-7 xl:gap-14">
            <div className="flex flex-col gap-4">
              <h5 className="font-fira text-h5 leading-h5 font-semibold text-black-theme">
                Hi, my name is <span className="text-blue-theme">Irsyad</span>{" "}
                👋🏻
              </h5>
              <h1 className="font-fira text-h1 font-bold leading-h1 text-black-theme">
                Frontend Dev
                <span className="hidden md:inline lg:hidden xl:inline">
                  eloper
                </span>{" "}
                & UI Designer.
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
              type="button"
            />
          </div>
        </div>

        {/* About Image */}
        <div
          id="right-about"
          className="order-first place-items-center lg:order-last lg:place-items-end"
        >
          <AboutSVG />
        </div>
      </div>
    </section>
  );
};

export default About;
