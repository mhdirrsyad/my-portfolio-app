import CardCarousel from "../components/my-project-components/CardCarousel.jsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MyProject = () => {
  const myProjectRef = useRef(null);

  // GSAP - Animate My Project Section
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
          let { isDesktop, isTablet, reduceMotion } = context.conditions;

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: myProjectRef.current,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
            },
          });

          if ((isDesktop || isTablet) && !reduceMotion) {
            tl.from("#section-title", {
              y: "+=30",
              opacity: 0,
              duration: 0.5,
            })
              .from(
                ".card",
                {
                  x: "-=30",
                  opacity: 0,
                  duration: 0.5,
                },
                "<=0.5",
              )
              .from(
                "#prev",
                {
                  x: "-=30",
                  opacity: 0,
                  duration: 0.5,
                },
                ">",
              )
              .from(
                "#next",
                {
                  x: "+=30",
                  opacity: 0,
                  duration: 0.5,
                },
                "<",
              )
              .from(
                ".pagination-btns",
                {
                  y: "+=30",
                  opacity: 0,
                  duration: 0.5,
                  stagger: 0.5,
                },
                "<",
              );
          } else {
            tl.from("#section-title", {
              y: "+=30",
              opacity: 0,
              duration: 0.5,
            })
              .from(".card", {
                y: "+=30",
                opacity: 0,
                duration: 0.5,
              })
              .from(
                ".pagination-btns",
                {
                  y: "+=30",
                  opacity: 0,
                  duration: 0.5,
                  stagger: 0.5,
                },
                ">",
              );
          }
        },
      );
    },
    { scope: myProjectRef },
  );

  return (
    <section ref={myProjectRef} id="my_project" className="bg-background-theme">
      <div className="max-w-screen overflow-hidden mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-24">
        {/* Section Title */}
        <h3
          id="section-title"
          className="mb-8 lg:mb-12 text-h3 font-fira font-semibold text-center"
        >
          What I’ve Worked On
        </h3>

        {/* My Project Content */}
        <CardCarousel />
      </div>
    </section>
  );
};

export default MyProject;
