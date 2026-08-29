import useIntro from "@/hooks/useIntro";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";

const MAX_OFFSET = 829.38;

function Preloader() {
  const preloaderWrapperRef = React.useRef(null);
  const preloaderRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const counterRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const { isStarted, setIsStarted } = useIntro();

  useGSAP(() => {
    const preloader = preloaderRef.current;
    const circle = circleRef.current;
    const counter = counterRef.current;
    const logo = logoRef.current;
    const button = buttonRef.current;

    if (!preloader || !circle || !counter || !logo || !button) return;

    const counterNumber = counter.querySelector("b");

    const tl = gsap.timeline();
    tl.to([circle, counter], { opacity: 1, duration: 1 })
      .to(
        preloader,
        {
          "--progress-offset": 0,
          duration: 1.2,
          ease: "expo.in",
        },
        "<",
      )
      .to(
        counterNumber,
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 1.2,
          ease: "expo.in",
        },
        "<",
      )
      .to(preloader, {
        "--progress-offset": -MAX_OFFSET,
        duration: 1,
        ease: "expo.inOut",
      })
      .to([circle, counter], { opacity: 0 })
      .to(
        logo,
        {
          y: -40,
          duration: 0.8,
          ease: "power3.out",
        },
        "<",
      )
      .to(
        button,
        {
          y: -40,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
        },
        "<",
      );
  }, []);

  useGSAP(
    () => {
      const preloaderWrapper = preloaderWrapperRef.current;
      if (!preloaderWrapper || !isStarted) return;

      gsap.to(preloaderWrapper, { autoAlpha: 0, z: -999 });
    },
    { scope: preloaderWrapperRef, dependencies: [isStarted] },
  );

  return (
    <div
      ref={preloaderWrapperRef}
      className="fixed inset-0 z-preloader bg-dark flex items-center justify-center size-full will-change-[opacity]"
      style={{
        "--progress-offset": MAX_OFFSET,
        "--size-circle": "16.875rem",
      }}
    >
      <div ref={preloaderRef} className="relative">
        <svg
          ref={circleRef}
          style={{
            strokeDasharray: MAX_OFFSET,
            strokeDashoffset: "var(--progress-offset)",
          }}
          className="w-[var(--size-circle)] h-[var(--size-circle)] -rotate-90 opacity-0"
          width="270"
          height="270"
          viewBox="0 0 270 270"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="136" cy="136" r="132" className="stroke-accent" />
        </svg>

        <div className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <img
            ref={logoRef}
            src="/images/logo.gif"
            alt="monhpham logo"
            className="size-16"
            width={64}
            height={64}
          />
        </div>

        <button
          ref={buttonRef}
          onClick={() => setIsStarted(true)}
          className="bg-transparent border border-accent rounded-[4.375rem] flex items-center justify-center mx-auto h-[2.875rem] w-[var(--btn-width)] uppercase absolute bottom-0 left-[calc((var(--size-circle)-var(--btn-width))/2)] opacity-0 hover:bg-accent hover:text-dark transition-[background-color,color] ease-[cubic-bezier(.165,.84,.44,1)] duration-[.6s] text-[.875rem] leading-180 tracking-widest"
          type="button"
          style={{
            "--btn-width": "12.5rem",
          }}
        >
          Start
        </button>

        <span
          ref={counterRef}
          className="w-full text-center mt-[1.125rem] absolute left-0 top-0 text-[.625rem] font-normal opacity-0 tracking-tight leading-110 lg:text-[.75rem]"
        >
          <b className="font-bold">0</b>%
        </span>
      </div>
    </div>
  );
}

export default Preloader;
