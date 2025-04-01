import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const HeaderLogo = () => {
  const svgContainer = useRef();
  const mm = gsap.matchMedia();

  // GSAP - Animate Header Logo
  const { contextSafe } = useGSAP(
    () => {
      gsap.set(svgContainer.current, {
        overflow: "visible",
      });
    },
    { scope: svgContainer },
  );

  const handleClick = contextSafe(() => {
    gsap.killTweensOf("#mhdirrsyad .letter");

    mm.add(
      {
        isAnyScreen: "(min-width: 0px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        let { reduceMotion } = context.conditions;

        if (!reduceMotion) {
          gsap.to("#mhdirrsyad .letter", {
            x: "100%",
            opacity: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              gsap.killTweensOf("#mhdirrsyad .letter");

              gsap.fromTo(
                "#mhdirrsyad .letter",
                { x: "0%", y: "-100%", opacity: 0 },
                {
                  y: "0%",
                  opacity: 1,
                  duration: 0.7,
                  ease: "elastic.out(1,0.5)",
                  stagger: 0.03,
                },
              );
            },
          });
        }
      },
    );
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="header-logo"
      data-name="Header Logo"
      viewBox="0 0 179.44 32.86"
      ref={svgContainer}
      onClick={handleClick}
      aria-label="Header Logo"
    >
      <defs>
        <filter
          id="drop-shadow-1"
          width="17.11"
          height="19.45"
          x="0"
          y="6.68"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-2"
          width="15.75"
          height="26.13"
          x="18.7"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-2"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-2" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-3"
          width="15.73"
          height="26.44"
          x="35.11"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-3"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-3" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-4"
          width="14.56"
          height="25.68"
          x="53.31"
          y="0.45"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-4"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-4" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-5"
          width="13.92"
          height="19.45"
          x="71.1"
          y="6.68"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-5"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-5" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-6"
          width="13.92"
          height="19.45"
          x="87.9"
          y="6.68"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-6"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-6" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-7"
          width="15.99"
          height="19.78"
          x="102.44"
          y="6.68"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-7"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-7" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-8"
          width="18.82"
          height="25.87"
          x="118.17"
          y="6.99"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-8"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-8" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-9"
          width="15.95"
          height="19.76"
          x="135.95"
          y="6.68"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-9"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-9" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <filter
          id="drop-shadow-10"
          width="26.74"
          height="26.44"
          x="152.7"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="2" dy="2"></feOffset>
          <feGaussianBlur result="blur-10"></feGaussianBlur>
          <feFlood floodColor="#181923" floodOpacity="1"></feFlood>
          <feComposite in2="blur-10" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g id="mhdirrsyad">
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M3.63 9.25c.28-.72.67-1.28 1.17-1.7s1.1-.62 1.81-.62c.35 0 .66.05.93.14s.51.24.71.43c.16.14.29.32.4.52s.21.43.29.68c.13-.25.27-.47.43-.67a2.9 2.9 0 0 1 1.34-.95c.3-.1.63-.15.98-.15.45 0 .86.09 1.25.28.39.18.73.48 1.02.88.28.41.5.94.66 1.58s.24 1.42.24 2.35V23.9H11.4V12.01q0-.48-.09-.78c-.06-.21-.14-.37-.24-.49a.9.9 0 0 0-.35-.24c-.13-.05-.27-.07-.4-.07q-.225 0-.39.06c-.11.04-.22.1-.32.17-.08.07-.16.15-.22.24s-.12.19-.16.3v12.71H5.88V12c0-.32-.03-.58-.08-.78s-.13-.36-.22-.48a.9.9 0 0 0-.34-.24c-.13-.05-.26-.07-.41-.07-.16 0-.31.03-.44.09s-.24.15-.34.26c-.07.08-.14.18-.19.29s-.1.24-.15.37V23.9H.25V7.24h3.27l.11 2.02Z"
          filter="url(#drop-shadow-1)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M23.39 8.65c.23-.27.48-.51.73-.72a4.379 4.379 0 0 1 2.8-1c.77 0 1.49.13 2.13.39.65.26 1.2.67 1.67 1.22s.83 1.26 1.09 2.13.39 1.91.39 3.13v10.08h-3.8V13.77c0-.59-.07-1.11-.2-1.54q-.195-.645-.57-1.05c-.25-.27-.54-.46-.89-.59a3.3 3.3 0 0 0-1.17-.19c-.34 0-.65.04-.94.11s-.56.18-.79.32c-.22.12-.42.27-.59.45s-.34.37-.49.58v12.02h-3.8V.25h3.8v9.28c.19-.32.4-.61.64-.88Z"
          filter="url(#drop-shadow-2)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M35.75 11.98c.26-1.05.64-1.94 1.14-2.69q.75-1.125 1.83-1.74c.72-.41 1.53-.61 2.45-.61.77 0 1.46.16 2.04.47.59.31 1.11.76 1.57 1.33V.25h3.81v23.63h-3.43l-.19-1.74c-.46.65-1.01 1.15-1.64 1.51q-.945.54-2.19.54c-.9 0-1.71-.21-2.43-.64s-1.32-1.01-1.81-1.76c-.5-.75-.88-1.64-1.15-2.67-.26-1.03-.4-2.15-.4-3.36v-.32c0-1.26.13-2.42.39-3.46Zm3.56 5.73c.1.6.28 1.12.51 1.56.24.45.54.81.92 1.06.37.26.83.38 1.37.38.66 0 1.2-.16 1.63-.48s.78-.75 1.03-1.31v-6.74c-.25-.56-.6-1-1.03-1.31s-.97-.47-1.61-.47c-.54 0-1 .13-1.37.39-.38.26-.69.62-.92 1.07-.24.46-.41 1-.52 1.61s-.16 1.26-.16 1.96v.32c0 .7.05 1.35.16 1.95Z"
          filter="url(#drop-shadow-3)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M61.62 7.24v13.17h4.01v3.48H53.57v-3.48h4.21v-9.68h-4.21V7.24zm-3.96-5.18c.1-.28.25-.53.44-.73.19-.19.42-.35.69-.46s.57-.17.89-.17c.67 0 1.21.21 1.61.64s.59.97.59 1.64-.2 1.21-.59 1.64c-.4.43-.93.64-1.61.64-.33 0-.63-.06-.89-.17q-.405-.165-.69-.48c-.19-.19-.34-.43-.44-.72-.11-.28-.16-.59-.16-.92s.05-.63.16-.92Z"
          filter="url(#drop-shadow-4)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M81.57 7.06c.49.09.88.18 1.18.28l-.56 4.26c-.5-.13-1.01-.23-1.54-.3-.52-.07-1.02-.1-1.5-.1s-.94.05-1.33.15-.75.24-1.06.44c-.37.23-.69.51-.96.86q-.39.525-.66 1.23v10h-3.8V7.24h3.54l.15 2.35.03.37q.9-1.41 2.16-2.22a4.97 4.97 0 0 1 2.75-.81c.57 0 1.1.04 1.59.13Z"
          filter="url(#drop-shadow-5)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M98.37 7.06c.49.09.88.18 1.18.28l-.56 4.26c-.5-.13-1.01-.23-1.54-.3-.52-.07-1.02-.1-1.5-.1s-.94.05-1.33.15-.75.24-1.06.44c-.37.23-.69.51-.96.86q-.39.525-.66 1.23v10h-3.8V7.24h3.54l.15 2.35.03.37q.9-1.41 2.16-2.22a4.97 4.97 0 0 1 2.75-.81c.57 0 1.1.04 1.59.13Z"
          filter="url(#drop-shadow-6)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M112.34 18.64c-.1-.19-.29-.38-.55-.55-.27-.16-.63-.32-1.08-.46s-1.01-.29-1.69-.43c-.87-.19-1.66-.44-2.37-.73s-1.33-.65-1.84-1.07c-.51-.41-.91-.89-1.2-1.43s-.43-1.17-.43-1.88.15-1.34.44-1.97.71-1.17 1.26-1.65a6 6 0 0 1 2-1.12c.78-.28 1.67-.42 2.65-.42s1.95.14 2.77.41 1.52.64 2.09 1.12c.56.48 1 1.05 1.3 1.71s.45 1.37.45 2.14h-3.8q0-.42-.12-.78c-.08-.24-.21-.46-.37-.65-.23-.26-.54-.46-.92-.62-.39-.15-.85-.23-1.4-.23-.46 0-.87.05-1.22.15s-.63.25-.85.43c-.2.16-.35.36-.46.58s-.16.45-.16.7.05.47.14.68.25.4.49.56c.23.17.54.33.94.47q.6.21 1.53.36 1.335.24 2.49.63c1.155.39 1.43.58 1.98.98.56.41.99.91 1.31 1.48.31.58.47 1.27.47 2.07a4.5 4.5 0 0 1-.47 2.04c-.31.62-.76 1.16-1.33 1.61-.58.45-1.29.8-2.11 1.05s-1.74.38-2.75.38c-1.11 0-2.09-.16-2.95-.49-.85-.33-1.57-.76-2.14-1.29a5.2 5.2 0 0 1-1.3-1.79c-.3-.67-.44-1.35-.44-2.02h3.62c.03.45.14.84.33 1.16s.44.58.74.78c.3.21.64.35 1.03.45.39.09.79.14 1.2.14q.735 0 1.29-.15c.555-.15.67-.23.91-.39a1.53 1.53 0 0 0 .68-1.28c0-.26-.05-.48-.16-.68Z"
          filter="url(#drop-shadow-7)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M121.14 30.53c-.27-.05-.57-.13-.89-.23l.46-3.26c.15 0 .35 0 .59.02s.44.02.58.02c.3 0 .57-.11.8-.32s.43-.44.59-.68.29-.43.36-.55.17-.3.28-.52l.88-1.83-6.26-15.94h4.16l3.39 9.75.41 1.69.56-1.66 3.38-9.78h4.2l-7.5 19.14c-.16.42-.38.88-.63 1.37-.26.49-.59.95-.98 1.37s-.87.77-1.43 1.06-1.22.43-1.99.43c-.36 0-.68-.03-.95-.08Z"
          filter="url(#drop-shadow-8)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M145.56 23.18c-.06-.27-.12-.55-.16-.85q-.315.39-.72.72a4.2 4.2 0 0 1-.9.58c-.34.17-.71.31-1.11.41s-.83.15-1.3.15c-.76 0-1.45-.12-2.08-.37s-1.18-.59-1.63-1.03a4.7 4.7 0 0 1-1.07-1.58c-.26-.61-.38-1.27-.38-1.99 0-.92.16-1.74.48-2.45s.8-1.3 1.43-1.76q.855-.63 2.13-.96c1.275-.33 1.81-.33 2.91-.33h2.12v-.98c0-.39-.05-.74-.16-1.05a2.2 2.2 0 0 0-.49-.81c-.23-.24-.51-.42-.85-.55s-.74-.19-1.2-.19c-.4 0-.75.05-1.04.16s-.53.26-.71.45c-.16.17-.29.38-.36.63s-.12.52-.12.82h-3.8c0-.71.14-1.38.42-2.02s.69-1.19 1.22-1.68c.53-.48 1.18-.86 1.95-1.15.77-.28 1.65-.42 2.65-.42.89 0 1.72.12 2.49.37s1.44.61 2 1.09 1.01 1.09 1.33 1.82q.48 1.095.48 2.55v7.14q0 1.335.15 2.22c.1.58.25 1.09.44 1.51v.26h-3.85c-.09-.2-.17-.44-.23-.71Zm-2.32-2.45c.33-.1.62-.24.89-.4a3.1 3.1 0 0 0 1.13-1.2v-2.86h-1.94c-.59 0-1.1.06-1.52.19s-.76.31-1.03.53c-.26.24-.46.52-.59.84s-.19.67-.19 1.05c0 .3.05.57.14.82s.23.46.42.64c.18.16.41.3.68.39.27.1.58.15.94.15.38 0 .74-.05 1.07-.15Z"
          filter="url(#drop-shadow-9)"
          className="letter"
        ></path>
        <path
          fill="#2974b2"
          stroke="#181923"
          strokeMiterlimit="10"
          strokeWidth=".5px"
          d="M172.82 20.18v3.7h4.37v-3.69h-4.37ZM166.18.25h-3.81v8.48c-.46-.57-.98-1.02-1.57-1.33-.58-.31-1.26-.47-2.04-.47-.92 0-1.74.21-2.45.62-.72.41-1.33.99-1.83 1.73q-.75 1.125-1.14 2.7c-.26 1.04-.39 2.2-.39 3.46v.32c0 1.21.13 2.33.4 3.36.26 1.03.64 1.92 1.15 2.67.49.75 1.09 1.34 1.81 1.76.71.43 1.52.64 2.42.64q1.245 0 2.19-.54c.945-.54 1.18-.86 1.64-1.5l.19 1.73h5.56v-3.71h-2.15zm-3.81 18.68c-.26.55-.6.99-1.03 1.31-.44.32-.98.47-1.64.47-.53 0-.99-.12-1.36-.38-.38-.26-.68-.61-.92-1.06q-.36-.66-.51-1.56c-.11-.6-.16-1.25-.16-1.95v-.32c0-.7.06-1.35.17-1.96.1-.61.28-1.15.51-1.61.24-.45.55-.81.93-1.07s.83-.39 1.37-.39c.65 0 1.19.15 1.61.47.43.31.77.75 1.03 1.31z"
          filter="url(#drop-shadow-10)"
          className="letter"
        ></path>
      </g>
    </svg>
  );
};

export default HeaderLogo;
