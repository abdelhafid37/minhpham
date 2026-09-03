import useAudio from "@/hooks/useAudio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function slideYTween(target, { from, to }) {
  gsap.fromTo(
    target,
    { yPercent: from },
    {
      yPercent: to,
      duration: 0.4,
      ease: "power3.inOut",
      overwrite: "auto",
    },
  );
}

export default function Button() {
  const { isPlaying, setIsPlaying } = useAudio();

  const onRef = useRef(null);
  const offRef = useRef(null);

  // const { isStarted } = useIntro();

  useGSAP(() => {
    const on = onRef.current;
    const off = offRef.current;

    if (!on || !off) return;

    if (isPlaying) {
      slideYTween(on, { from: 100, to: 0 });
      slideYTween(off, { from: 0, to: -100 });
    } else {
      slideYTween(on, { from: 0, to: -100 });
      slideYTween(off, { from: 100, to: 0 });
    }
  }, [isPlaying]);

  useGSAP(() => {}, []);

  return (
    <button
      onClick={() => setIsPlaying((prev) => !prev)}
      className="fixed flex overflow-hidden text-desc lg:text-desc-lg uppercase gap-gap px-1.5 py-px -rotate-90 bottom-bottom-audio md:bottom-bottom-audio-md lg:bottom-bottom-audio-lg font-sans font-bold leading-130 right-screen-x-audio md:right-screen-x-audio-md lg:right-screen-x-audio-lg"
    >
      <span className="transition-colors duration-300 text-dark-gray hover:text-accent">Sound</span>
      <span className="*:block relative">
        <span ref={onRef} className="relative">
          On
        </span>
        <span ref={offRef} className="absolute top-0 left-0">
          Off
        </span>
      </span>
    </button>
  );
}
