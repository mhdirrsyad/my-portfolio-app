import { serviceContent } from "../data/serviceContent.jsx";
import ServiceCard from "../components/service-components/ServiceCard.jsx";
import Line from "../components/atoms/line-components/Line.jsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);

  // GSAP - Animate Services Section
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
              trigger: servicesRef.current,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
            },
          });

          if (isDesktop && !reduceMotion) {
            tl.from("#section-title", {
              y: "+=30",
              opacity: 0,
              duration: 0.5,
            }).from(
              ".service",
              {
                y: "+=30",
                opacity: 0,
                duration: 0.5,
                stagger: 0.3,
              },
              "<=0.5",
            );
          } else if (isTablet && !reduceMotion) {
            tl.from("#section-title", {
              y: "+=30",
              opacity: 0,
              duration: 0.5,
            }).from(".service", {
              x: "-=30",
              opacity: 0,
              stagger: 0.4,
            });
          } else {
            tl.from("#section-title", {
              y: "+=30",
              opacity: 0,
              duration: 0.5,
            }).from(".service", {
              x: "-=30",
              opacity: 0,
              stagger: 0.4,
            });
          }
        },
      );
    },
    { scope: servicesRef },
  );

  return (
    <section
      ref={servicesRef}
      id="services"
      className="bg-[url('background/bg_dots_image.png')] bg-repeat w-full"
    >
      {/* Line */}
      <Line type="large" />

      <div className="max-w-screen mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-24">
        {/* Section Title */}
        <h3
          id="section-title"
          className="mb-8 lg:mb-12 text-h3 font-fira font-semibold text-center"
        >
          Here’s What I Can Do
        </h3>

        {/* Service Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 lg:divide-x-1 divide-border-theme">
          {serviceContent.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Line */}
      <Line type="large" />
    </section>
  );
};

export default Services;
