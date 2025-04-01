import Line from "../components/atoms/line-components/Line.jsx";
import FormGetInTouch from "../components/get-in-touch-components/FormGetInTouch.jsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const GetInTouch = () => {
  const getInTouchRef = useRef(null);

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
              trigger: getInTouchRef.current,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
            },
          });

          if (isDesktop && !reduceMotion) {
            tl.from(`#left-get-in-touch`, {
              x: -100,
              opacity: 0,
              duration: 0.5,
            }).from(
              `#right-get-in-touch`,
              { x: 100, opacity: 0, duration: 0.5 },
              "<",
            );
          } else if ((isTablet || isMobile) && !reduceMotion) {
            tl.from("#left-get-in-touch", {
              y: "+=30",
              opacity: 0,
              duration: 0.3,
            }).from(
              "#right-get-in-touch",
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
    { scope: getInTouchRef },
  );

  return (
    <section
      id="get_in_touch"
      ref={getInTouchRef}
      className="bg-[url('/background/bg_dots_image.png')] bg-repeat w-full"
    >
      {/* Line */}
      <Line type="large" />

      <div className="max-w-screen overflow-hidden mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-24 flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-8 lg:gap-12">
        {/* Section Title & Descrition */}
        <div
          id="left-get-in-touch"
          className="flex flex-col gap-6 lg:gap-12 w-full lg:max-w-[482px]"
        >
          <h3 className="text-h3 font-fira font-semibold text-center lg:text-start">
            Say Hello! I'm Open to Opportunities
          </h3>

          <div className="flex flex-col gap-3 lg:gap-6">
            <p className="text-p leading-p text-black-theme font-fira-sans">
              I’m always open to new collaborations, exciting projects, and
              meaningful connections. 🚀
            </p>
            <p className="text-p leading-p text-black-theme font-fira-sans">
              Whether you’re looking for a frontend developer, a UI/UX designer,
              or just want to discuss creative ideas, don’t hesitate to reach
              out. Let’s bring great ideas to life together! ❤️{" "}
            </p>
          </div>

          <div>
            <p className="text-p leading-p text-black-theme font-fira-sans">
              Email me at
            </p>
            <p className="text-links leading-links text-black-theme font-fira-sans font-semibold">
              mohammadirsyad02@gmail.com
            </p>
          </div>
        </div>

        {/* Form Get In Touch */}
        <FormGetInTouch />
      </div>
    </section>
  );
};

export default GetInTouch;
